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