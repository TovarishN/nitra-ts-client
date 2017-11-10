import * as net from 'net';
import * as Rx from 'rxjs';
import { Message } from './NitraMessages';
import { DesFun, GetDeserializer } from './NitraDeserialize';
//import * as WW from 'typed-web-workers';
import * as cp from 'child_process';
var Threads = require('webworker-threads');

let thread: any;

export function createPipe(name: string): { in: Rx.Observable<Message>, out: Rx.Observer<Buffer>, asyncOut: Rx.Observable<Message> } {
	try {
		let pipeStr = `//./pipe/${name}`;
		let responsePipe = `${pipeStr}-response`;
		let requestPipe = `${pipeStr}-request`;
		let asyncResponsePipe = `${pipeStr}-async-response`;

		let subjectOut = new Rx.Subject<Buffer>();

		console.log("try connect to response");

		let connOut = connect(requestPipe);
		subjectOut.subscribe(data => {
			//console.log("send: ", data);
			connOut.write(data);
			//connOut.end();
		});

		//let subjectIn = new Rx.Subject<Buffer>();
		let connIn = connect(responsePipe);

		connIn.on('connect', () => {
			console.log('inbound connected');

			connIn.on('data', data => {

				//console.log("response pipe receive: ", data);
				//subjectIn.next(data);
			});
		});

		let subjectAsyncOut = createAsyncResponse(asyncResponsePipe);

		let subjectIn = createAsyncResponse(asyncResponsePipe);

		return { in: subjectIn, out: subjectOut, asyncOut: subjectAsyncOut }
	}
	catch (e) {
		console.log("error!!! ", e);
		return { in: null, out: null, asyncOut: null };
	}
}

function connect(pipe: string): net.Socket {
	let result = net.connect(pipe, () => {
		console.log(`${pipe} connection listener!`);
	});

	// result.on('data', data => {
	//     console.log(`${pipe} data: ${data.toString()}`);
	// });
	result.on('error', err => {
		console.log(`${pipe} error: ${err}`);
	});
	result.on('connect', () => {
		console.log(`${pipe} connected!`);
	});
	return result;
}

function createAsyncResponse(pipe: string): Rx.Observable<Message> {
	let res = new Rx.Subject<Message>();
	let asyncConn = connect(pipe);

	let curMsg: Message = null;
	let funStack: DesFun[] = [];

	asyncConn.on('data', data => {
		console.log("async receive: ", data.length, data);
		if (!curMsg) {
			let msgId = data.readInt16LE(0);
			curMsg = <Message>{ MsgId: msgId };
			funStack = GetDeserializer(curMsg);
			return;
		}

		if (funStack.length > 0) {
			let buf = funStack.shift()(data, funStack);
		}

		if (funStack.length == 0) {
			res.next(curMsg);
			curMsg = null;
		}
		//subjectIn.next(data);
	});

	return res.asObservable();
}







