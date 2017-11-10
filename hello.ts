import * as net from 'net';
import * as Rx from 'rxjs';
import * as Msg from './NitraMessages';
import * as WW from 'typed-web-workers';
import * as crypto from 'crypto';
import * as childProcess from 'child_process';
import { Serialize } from './NitraSerialize';
import { createPipe } from './NamedPipe';


(async function main() {
	console.log('hello world');

	try {
		let key = crypto.randomBytes(16).toString('hex');
		let name = `aaa-${key}`;
		let cp = childProcess.spawn(`D:/work/nitra/nitra/bin/Debug/Stage1/Nitra.ClientServer.Server.exe`, [name], { shell: true, detached: true });
		cp.on('close', (code, signal) => {
			console.log(`closed ${code}, ${signal}`);
		});
		console.log(cp.pid, "spawned");

		await Rx.Observable.timer(1000).toPromise();

		console.log('create pipes');
		let pipe = createPipe(name);

		pipe.in
			//.scan((acc, buf, _index) => Buffer.concat([acc, buf]))
			.subscribe(data => {
				console.log(`async pipe subject ${data}`, data);
			});

		let cv = <Msg.CheckVersion_ClientMessage>{ assemblyVersionGuid: "ae8f12fe-9286-4031-828a-f8371b0399bc", MsgId: 42 };
		let cvData = Serialize(cv);
		pipe.out.next(cvData);
		console.log("buffer sent", `length : ${cvData.buffer.byteLength}`, cvData.toString());

		let sol = <Msg.SolutionStartLoading_ClientMessage>{ id: { Value: 1 }, fullPath: 'D:\\work\\nitratest\\New suite\\test-0000', MsgId: 43 };
		let solData = Serialize(sol);
		pipe.out.next(solData);
		console.log("buffer sent", `length : ${solData.buffer.byteLength}`, solData.toString());

		let prg = <Msg.ProjectStartLoading_ClientMessage>{
			MsgId: 46
			, id: { Value: 2 }
			, fullPath: "D:\\work\\nitratest\\New suite\\test-0000\\test-0000"
			, config: {
				MsgId: 126
				, ProjectSupport: {
					MsgId: 125
					, Caption: ""
					, TypeFullName: ""
					, Path: "D:\\work\\nitratest\\New suite"
				}
				, Languages: [{
					MsgId: 128
					, Name: "AkkaExpressionLang"
					, Path: "D:\\work\\olimpic\\akka-poc\\Sample.Grammar\\bin\\Debug\\akka_rule_parser.dll"
					, DynamicExtensions: []
				}]
				, References: []
			}
		};
		let prgData = Serialize(prg);
		pipe.out.next(prgData);
		console.log("buffer sent", `length : ${prgData.buffer.byteLength}`, prgData.toString());


	}
	catch (e) {
		console.log("error!!! ", e);
	}

})();
