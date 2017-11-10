import * as Msg from './NitraMessages';

export type DesFun = (buf: Buffer, stack: DesFun[]) => void;

export function GetDeserializer(msg: Msg.Message): DesFun[] {
	let retStack: DesFun[] = [];
	switch (msg.MsgId) {
		case 90: {
			retStack.push((buf, stack) => {
				msg.FileId = { Value: buf.readInt32LE(0) };
			});
			retStack.push((buf, stack) => {
				msg.Version = { Value: buf.readInt32LE(0) };
			});
			retStack.push((buf, stack) => {
				msg.SolutionId = { Value: buf.readInt32LE(0) };
			});
			retStack.push((buf, stack) => {
				let length = buf.readInt32LE(0);
				msg.spanClassInfos = [];
				for (let i = 0; i < length; i++) {
					msg.spanClassInfos.push(<Msg.SpanClassInfo>{ MsgId: 129 });
					stack.push(...GetDeserializer(msg.spanClassInfos[i]));
				}
			});
			return retStack;
		}
		case 129: {
			retStack.push((buf, stack) => {	});
			retStack.push((buf, stack) => { msg.FullName = buf.toString(); });
            retStack.push((buf, stack) => { msg.Id = buf.readInt32LE(0); });
            retStack.push((buf, stack) => { msg.Id = buf.readDoubleLE(0); });
			retStack.push((buf, stack) => {
				msg.ForegroundColor = buf.readInt32LE(0);
			});
			return retStack;
		}
	}
}
