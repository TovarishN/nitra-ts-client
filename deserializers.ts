import Int64 = require('node-int64');
import { Message } from './NitraMessages';
export type DesFun = (buf: Buffer, stack: DesFun[]) => void;
export function cast<To extends Message>(obj: Message): To {
    return <To>obj;
}

export function GetStringArrayDeserializer(arr: string[], index: number): DesFun[] {
    let retStack: DesFun[] = [];
    retStack.push((buf, stack) => { });
    retStack.push((buf, stack) => { arr[index] = buf.toString(); });
    return retStack;
}

export function StringDeserializer(buf, stack, setter : (str: string) => void, getter : () => string) : void {

    let strFun = (buf : Buffer, stack2 : DesFun[], len : number) => { 
		var final = len - buf.toString().length;
		setter(getter() ? getter() + buf.toString() : buf.toString());
		if(final > 0)
			stack2.push((buf, st) => strFun(buf, st, final));
	};

	let lenFun = ((buf:Buffer, stack:DesFun[], length: number, shift: number) => {
		let len = buf.readInt8(0);
		length = length | (len & 0x7f) << shift;
		if((len & 0x80) != 0){
			stack.push((buf3: Buffer, stack3: DesFun[]) => lenFun(buf3, stack3, length, shift + 7));
		}
		else {
			stack.push((buf, st) => strFun(buf, st, length));
		}
	});

    lenFun(buf, stack, 0, 0);
}
