import { Observable, timer } from 'rxjs';
import * as Msg from './NitraMessages';
import * as crypto from 'crypto';
import * as childProcess from 'child_process';
import { Serialize } from './NitraSerialize';
import { createPipe } from './NamedPipe';

type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

(async function main() {
	console.log('hello world');

	try {
		//rule();
		let key = crypto.randomBytes(16).toString('hex');
		let name = `aaa-${key}`;
		let cp = childProcess.spawn(`c:/work/nitra/bin/Debug/Stage1/Nitra.ClientServer.Server.exe`, [name], { shell: true, detached: true });
		cp.on('close', (code, signal) => {
			console.log(`closed ${code}, ${signal}`);
		});
		console.log(cp.pid, "spawned");

		console.log('create pipes');
		let pipe = await createPipe(name);

		pipe.syncResponse.subscribe(x => { console.log(x); });
		pipe.asyncResponse.subscribe(x => { console.log(x); });

		let cv = <Msg.CheckVersion_ClientMessage>{ assemblyVersionGuid: "76cd9b8c-5706-4ee3-ba38-0f47129322b1", MsgId: 42 };
		let cvData = Serialize(cv);
		pipe.syncRequest.next(cvData);
		console.log("buffer sent", `length : ${cvData.buffer.byteLength}`, cvData.toString());

		let sol = <Msg.SolutionStartLoading_ClientMessage>{ id: { Value: 1 }, fullPath: 'D:\\work\\nitratest\\New suite\\test-0000', MsgId: 43 };
		let solData = Serialize(sol);
		pipe.syncRequest.next(solData);
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
					, Path: "C:\\work\\olimpic\\akka-poc\\Sample.Grammar\\bin\\Debug\\akka_rule_parser.dll"
					, DynamicExtensions: []
				}]
				, References: []
			}
		};
		let prgData = Serialize(prg);
		pipe.syncRequest.next(prgData);
		console.log("buffer sent", `length : ${prgData.buffer.byteLength}`, prgData.toString());

		let file = <Msg.FileLoaded_ClientMessage>{
			MsgId: 54,
			fullPath: "C:\\work\\nitratest\\New suite\\test-0000\\test-0000\\test-0000.test",
			projectId: { Value: 2 },
			version: { Value: 1 },
			id: { Value: 1 }
		};

		pipe.syncRequest.next(Serialize(file));
	}
	catch (e) {
		console.log("error!!! ", e);
	}

})();
