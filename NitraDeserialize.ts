import * as Msg from './NitraMessages';
import Int64 = require('node-int64');
import { DesFun, GetStringArrayDeserializer, cast } from './deserializers';

export function GetDeserializer(msg: Msg.Message): DesFun[] {
    let retStack: DesFun[] = [];
	switch (msg.MsgId) {
case 42: { // CheckVersion_ClientMessage
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.assemblyVersionGuid = buf.toString(); }); ;
 return retStack;
}
case 43: { // SolutionStartLoading_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.fullPath = buf.toString(); }); ;
 return retStack;
}
case 44: { // SolutionLoaded_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 45: { // SolutionUnloaded_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 46: { // ProjectStartLoading_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.fullPath = buf.toString(); }); 
msg.config = cast<Msg.Config>(<Msg.Message>{ MsgId: 46 }); retStack.push(...GetDeserializer(msg.config));
 return retStack;
}
case 47: { // ProjectLoaded_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 48: { // ProjectUnloaded_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 49: { // ProjectRename_ClientMessage
retStack.push((buf, stack) => { msg.oldId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.newId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.newPath = buf.toString(); }); ;
 return retStack;
}
case 50: { // ProjectReferenceLoaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.referencedProjectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.path = buf.toString(); }); ;
 return retStack;
}
case 51: { // ProjectReferenceUnloaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.referencedProjectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.path = buf.toString(); }); ;
 return retStack;
}
case 52: { // ReferenceLoaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.name = buf.toString(); }); ;
 return retStack;
}
case 53: { // ReferenceUnloaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.name = buf.toString(); }); ;
 return retStack;
}
case 54: { // FileLoaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.fullPath = buf.toString(); }); 
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.version = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 55: { // FileReparse_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 56: { // FileUnloaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 57: { // FileRenamed_ClientMessage
retStack.push((buf, stack) => { msg.oldId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.newId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.newPath = buf.toString(); }); ;
 return retStack;
}
case 58: { // FileInMemoryLoaded_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.name = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.content = buf.toString(); }); ;
 return retStack;
}
case 59: { // FileActivated_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.version = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 60: { // FileDeactivated_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 61: { // FileChanged_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.version = { Value: buf.readInt32LE(0) }; });
retStack.push(...GetDeserializer(msg.change));
msg.caretPos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 61 }); retStack.push(...GetDeserializer(msg.caretPos));
 return retStack;
}
case 62: { // FileChangedBatch_ClientMessage
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.changes = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.changes[i]));
				} });

msg.caretPos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 62 }); retStack.push(...GetDeserializer(msg.caretPos));
 return retStack;
}
case 63: { // PrettyPrint_ClientMessage
retStack.push((buf, stack) => { msg.state = <Msg.PrettyPrintState>buf.readInt32LE(0); });;
 return retStack;
}
case 64: { // CompleteWord_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.pos = buf.readInt32LE(0); });;
 return retStack;
}
case 65: { // CompleteWordDismiss_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.id = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 66: { // FindSymbolReferences_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
msg.pos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 66 }); retStack.push(...GetDeserializer(msg.pos));
 return retStack;
}
case 67: { // FindSymbolDefinitions_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
msg.pos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 67 }); retStack.push(...GetDeserializer(msg.pos));
 return retStack;
}
case 68: { // ParseTreeReflection_ClientMessage
retStack.push((buf, stack) => { msg.enable = buf.readUInt8(0)[0] === 1 });;
 return retStack;
}
case 69: { // GetObjectContent_ClientMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileVersion = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.objectId = buf.readInt32LE(0); });;
 return retStack;
}
case 70: { // GetObjectGraph_ClientMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileVersion = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.objectId = buf.readInt32LE(0); });;
 return retStack;
}
case 71: { // AttachDebugger_ClientMessage
;
 return retStack;
}
case 72: { // GetLibsMetadata_ClientMessage
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.libs = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.libs, i));
				} });
;
 return retStack;
}
case 73: { // GetLibsSyntaxModules_ClientMessage
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.libs = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.libs, i));
				} });
;
 return retStack;
}
case 74: { // GetLibsProjectSupports_ClientMessage
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.libs = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.libs, i));
				} });
;
 return retStack;
}
case 75: { // GetFileExtensions_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.languageNames = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.languageNames, i));
				} });
;
 return retStack;
}
case 76: { // SetCaretPos_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
msg.pos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 76 }); retStack.push(...GetDeserializer(msg.pos));
 return retStack;
}
case 77: { // GetHint_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.fileId = { Value: buf.readInt32LE(0) }; });
msg.pos = cast<Msg.VersionedPos>(<Msg.Message>{ MsgId: 77 }); retStack.push(...GetDeserializer(msg.pos));
 return retStack;
}
case 78: { // GetSubHint_ClientMessage
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.symbolId = buf.readInt32LE(0); });;
 return retStack;
}
case 79: { // FindDeclarations_ClientMessage
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.pattern = buf.toString(); }); 
retStack.push((buf, stack) => { msg.primaryProjectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.hideExternalItems = buf.readUInt8(0)[0] === 1 });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.kinds = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.kinds, i));
				} });
;
 return retStack;
}
case 80: { // Shutdown_ClientMessage
;
 return retStack;
}
case 81: { // FindSymbolDefinitions_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
msg.referenceSpan = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 81 }); retStack.push(...GetDeserializer(msg.referenceSpan))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.definitions = [];
				for (let i = 0; i < length; i++) {
                    msg.definitions.push(<Msg.SymbolLocation>{ MsgId: 121 });
					stack.push(...GetDeserializer(msg.definitions[i]));
				} });
;
 return retStack;
}
case 82: { // FindSymbolReferences_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
msg.referenceSpan = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 82 }); retStack.push(...GetDeserializer(msg.referenceSpan))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.symbols = [];
				for (let i = 0; i < length; i++) {
                    msg.symbols.push(<Msg.SymbolRreferences>{ MsgId: 112 });
					stack.push(...GetDeserializer(msg.symbols[i]));
				} });
;
 return retStack;
}
case 83: { // ParseTreeReflection_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.root = [];
				for (let i = 0; i < length; i++) {
                    msg.root.push(<Msg.ParseTreeReflectionStruct>{ MsgId: 134 });
					stack.push(...GetDeserializer(msg.root[i]));
				} });
;
 return retStack;
}
case 84: { // ObjectContent_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push(...GetDeserializer(msg.content));;
 return retStack;
}
case 85: { // LibsMetadata_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.metadatas = [];
				for (let i = 0; i < length; i++) {
                    msg.metadatas.push(<Msg.LibMetadata>{ MsgId: 111 });
					stack.push(...GetDeserializer(msg.metadatas[i]));
				} });
;
 return retStack;
}
case 86: { // LibsSyntaxModules_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.modules = [];
				for (let i = 0; i < length; i++) {
                    msg.modules.push(<Msg.SyntaxModules>{ MsgId: 110 });
					stack.push(...GetDeserializer(msg.modules[i]));
				} });
;
 return retStack;
}
case 87: { // LibsProjectSupports_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.libs = [];
				for (let i = 0; i < length; i++) {
                    msg.libs.push(<Msg.ProjectSupports>{ MsgId: 109 });
					stack.push(...GetDeserializer(msg.libs[i]));
				} });
;
 return retStack;
}
case 88: { // FileExtensions_ServerMessage
retStack.push((buf, stack) => { msg.solutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.fileExtensions = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.fileExtensions, i));
				} });
;
 return retStack;
}
case 89: { // SubHint_ServerMessage
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); ;
 return retStack;
}
case 90: { // LanguageLoaded_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.spanClassInfos = [];
				for (let i = 0; i < length; i++) {
                    msg.spanClassInfos.push(<Msg.SpanClassInfo>{ MsgId: 129 });
					stack.push(...GetDeserializer(msg.spanClassInfos[i]));
				} });
;
 return retStack;
}
case 91: { // OutliningCreated_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.outlining = [];
				for (let i = 0; i < length; i++) {
                    msg.outlining.push(<Msg.OutliningInfo>{ MsgId: 130 });
					stack.push(...GetDeserializer(msg.outlining[i]));
				} });
;
 return retStack;
}
case 92: { // KeywordsHighlightingCreated_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.spanInfos = [];
				for (let i = 0; i < length; i++) {
                    msg.spanInfos.push(<Msg.SpanInfo>{ MsgId: 114 });
					stack.push(...GetDeserializer(msg.spanInfos[i]));
				} });
;
 return retStack;
}
case 93: { // MatchedBrackets_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.results = [];
				for (let i = 0; i < length; i++) {
                    msg.results.push(<Msg.MatchBrackets>{ MsgId: 164 });
					stack.push(...GetDeserializer(msg.results[i]));
				} });
;
 return retStack;
}
case 94: { // SymbolsHighlightingCreated_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.spanInfos = [];
				for (let i = 0; i < length; i++) {
                    msg.spanInfos.push(<Msg.SpanInfo>{ MsgId: 114 });
					stack.push(...GetDeserializer(msg.spanInfos[i]));
				} });
;
 return retStack;
}
case 95: { // ProjectLoadingMessages_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.messages = [];
				for (let i = 0; i < length; i++) {
                    msg.messages.push(<Msg.CompilerMessage>{ MsgId: 124 });
					stack.push(...GetDeserializer(msg.messages[i]));
				} });
;
 return retStack;
}
case 96: { // ParsingMessages_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.messages = [];
				for (let i = 0; i < length; i++) {
                    msg.messages.push(<Msg.CompilerMessage>{ MsgId: 124 });
					stack.push(...GetDeserializer(msg.messages[i]));
				} });
;
 return retStack;
}
case 97: { // MappingMessages_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.messages = [];
				for (let i = 0; i < length; i++) {
                    msg.messages.push(<Msg.CompilerMessage>{ MsgId: 124 });
					stack.push(...GetDeserializer(msg.messages[i]));
				} });
;
 return retStack;
}
case 98: { // SemanticAnalysisMessages_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.messages = [];
				for (let i = 0; i < length; i++) {
                    msg.messages.push(<Msg.CompilerMessage>{ MsgId: 124 });
					stack.push(...GetDeserializer(msg.messages[i]));
				} });
;
 return retStack;
}
case 99: { // SemanticAnalysisDone_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 100: { // PrettyPrintCreated_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.type = <Msg.PrettyPrintState>buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); ;
 return retStack;
}
case 101: { // ReflectionStructCreated_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
msg.root = cast<Msg.ParseTreeReflectionStruct>(<Msg.Message>{ MsgId: 101 }); retStack.push(...GetDeserializer(msg.root));
 return retStack;
}
case 102: { // RefreshReferencesFailed_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.exception = buf.toString(); }); ;
 return retStack;
}
case 103: { // RefreshProjectFailed_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.exception = buf.toString(); }); ;
 return retStack;
}
case 104: { // FindSymbolReferences_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
msg.referenceSpan = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 104 }); retStack.push(...GetDeserializer(msg.referenceSpan))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.symbols = [];
				for (let i = 0; i < length; i++) {
                    msg.symbols.push(<Msg.SymbolRreferences>{ MsgId: 112 });
					stack.push(...GetDeserializer(msg.symbols[i]));
				} });
;
 return retStack;
}
case 105: { // Hint_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); 
msg.referenceSpan = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 105 }); retStack.push(...GetDeserializer(msg.referenceSpan));
 return retStack;
}
case 106: { // Exception_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.exception = buf.toString(); }); ;
 return retStack;
}
case 107: { // FoundDeclarations_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.projectId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.declarations = [];
				for (let i = 0; i < length; i++) {
                    msg.declarations.push(<Msg.DeclarationInfo>{ MsgId: 120 });
					stack.push(...GetDeserializer(msg.declarations[i]));
				} });
;
 return retStack;
}
case 108: { // CompleteWord_AsyncServerMessage
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.SolutionId = { Value: buf.readInt32LE(0) }; });
msg.replacementSpan = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 108 }); retStack.push(...GetDeserializer(msg.replacementSpan))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.completionList = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.completionList[i]));
				} });
;
 return retStack;
}
case 109: { // ProjectSupports
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.ProjectSupports = [];
				for (let i = 0; i < length; i++) {
                    msg.ProjectSupports.push(<Msg.ProjectSupport>{ MsgId: 125 });
					stack.push(...GetDeserializer(msg.ProjectSupports[i]));
				} });
;
 return retStack;
}
case 110: { // SyntaxModules
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.Modules = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.Modules, i));
				} });
;
 return retStack;
}
case 111: { // LibMetadata
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.ProjectSupprts = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.ProjectSupprts, i));
				} });

retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.Languages = [];
				for (let i = 0; i < length; i++) {
                    msg.Languages.push(<Msg.LanguageInfo>{ MsgId: 128 });
					stack.push(...GetDeserializer(msg.Languages[i]));
				} });
;
 return retStack;
}
case 112: { // SymbolRreferences
retStack.push((buf, stack) => { msg.SymbolId = buf.readInt32LE(0); });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.Definitions = [];
				for (let i = 0; i < length; i++) {
                    msg.Definitions.push(<Msg.SymbolLocation>{ MsgId: 121 });
					stack.push(...GetDeserializer(msg.Definitions[i]));
				} });

retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.References = [];
				for (let i = 0; i < length; i++) {
                    msg.References.push(<Msg.FileEntries>{ MsgId: 119 });
					stack.push(...GetDeserializer(msg.References[i]));
				} });
;
 return retStack;
}
case 113: { // NSpan
retStack.push((buf, stack) => { msg.StartPos = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.EndPos = buf.readInt32LE(0); });;
 return retStack;
}
case 114: { // SpanInfo
msg.Span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 114 }); retStack.push(...GetDeserializer(msg.Span))
retStack.push((buf, stack) => { msg.SpanClassId = buf.readInt32LE(0); });;
 return retStack;
}
case 115: { // Insert_FileChange
retStack.push((buf, stack) => { msg.pos = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); ;
 return retStack;
}
case 116: { // Delete_FileChange
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 116 }); retStack.push(...GetDeserializer(msg.span));
 return retStack;
}
case 117: { // Replace_FileChange
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 117 }); retStack.push(...GetDeserializer(msg.span))
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); ;
 return retStack;
}
case 118: { // FileIdentity
retStack.push((buf, stack) => { msg.FileId = { Value: buf.readInt32LE(0) }; });
retStack.push((buf, stack) => { msg.FileVersion = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
case 119: { // FileEntries
msg.File = cast<Msg.FileIdentity>(<Msg.Message>{ MsgId: 119 }); retStack.push(...GetDeserializer(msg.File))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.Ranges = [];
				for (let i = 0; i < length; i++) {
                    msg.Ranges.push(<Msg.Range>{ MsgId: 122 });
					stack.push(...GetDeserializer(msg.Ranges[i]));
				} });
;
 return retStack;
}
case 122: { // Range
msg.Span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 122 }); retStack.push(...GetDeserializer(msg.Span))
retStack.push((buf, stack) => { msg.StartLine = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.StartColumn = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.EndLine = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.EndColumn = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Text = buf.toString(); }); ;
 return retStack;
}
case 123: { // Location
msg.File = cast<Msg.FileIdentity>(<Msg.Message>{ MsgId: 123 }); retStack.push(...GetDeserializer(msg.File))
msg.Range = cast<Msg.Range>(<Msg.Message>{ MsgId: 123 }); retStack.push(...GetDeserializer(msg.Range));
 return retStack;
}
case 120: { // DeclarationInfo
retStack.push((buf, stack) => { msg.SymbolId = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Name = buf.toString(); }); 
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.NameMatchRuns = [];
				for (let i = 0; i < length; i++) {
                    msg.NameMatchRuns.push(<Msg.NSpan>{ MsgId: 113 });
					stack.push(...GetDeserializer(msg.NameMatchRuns[i]));
				} });

retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.FullName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Kind = buf.toString(); }); 
retStack.push((buf, stack) => { msg.SpanClassId = buf.readInt32LE(0); });
msg.Location = cast<Msg.Location>(<Msg.Message>{ MsgId: 120 }); retStack.push(...GetDeserializer(msg.Location));
 return retStack;
}
case 121: { // SymbolLocation
retStack.push((buf, stack) => { msg.SymbolId = buf.readInt32LE(0); });
msg.Location = cast<Msg.Location>(<Msg.Message>{ MsgId: 121 }); retStack.push(...GetDeserializer(msg.Location));
 return retStack;
}
case 124: { // CompilerMessage
retStack.push((buf, stack) => { msg.Type = <Msg.CompilerMessageType>buf.readInt32LE(0); });
msg.Location = cast<Msg.Location>(<Msg.Message>{ MsgId: 124 }); retStack.push(...GetDeserializer(msg.Location))
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Text = buf.toString(); }); 
retStack.push((buf, stack) => { msg.Number = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.Source = <Msg.CompilerMessageSource>buf.readInt32LE(0); });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.NestedMessages = [];
				for (let i = 0; i < length; i++) {
                    msg.NestedMessages.push(<Msg.CompilerMessage>{ MsgId: 124 });
					stack.push(...GetDeserializer(msg.NestedMessages[i]));
				} });
;
 return retStack;
}
case 125: { // ProjectSupport
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Caption = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.TypeFullName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Path = buf.toString(); }); ;
 return retStack;
}
case 126: { // Config
msg.ProjectSupport = cast<Msg.ProjectSupport>(<Msg.Message>{ MsgId: 126 }); retStack.push(...GetDeserializer(msg.ProjectSupport))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.Languages = [];
				for (let i = 0; i < length; i++) {
                    msg.Languages.push(<Msg.LanguageInfo>{ MsgId: 128 });
					stack.push(...GetDeserializer(msg.Languages[i]));
				} });

retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.References = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetStringArrayDeserializer(msg.References, i));
				} });
;
 return retStack;
}
case 127: { // DynamicExtensionInfo
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Name = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Path = buf.toString(); }); ;
 return retStack;
}
case 128: { // LanguageInfo
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Name = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Path = buf.toString(); }); 
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.DynamicExtensions = [];
				for (let i = 0; i < length; i++) {
                    msg.DynamicExtensions.push(<Msg.DynamicExtensionInfo>{ MsgId: 127 });
					stack.push(...GetDeserializer(msg.DynamicExtensions[i]));
				} });
;
 return retStack;
}
case 129: { // SpanClassInfo
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.FullName = buf.toString(); }); 
retStack.push((buf, stack) => { msg.Id = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.ForegroundColor = buf.readInt32LE(0); });;
 return retStack;
}
case 130: { // OutliningInfo
msg.Span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 130 }); retStack.push(...GetDeserializer(msg.Span))
retStack.push((buf, stack) => { msg.IsDefaultCollapsed = buf.readUInt8(0)[0] === 1 });
retStack.push((buf, stack) => { msg.IsImplementation = buf.readUInt8(0)[0] === 1 });;
 return retStack;
}
case 131: { // Literal_CompletionElem
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.text = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.description = buf.toString(); }); ;
 return retStack;
}
case 132: { // Symbol_CompletionElem
retStack.push((buf, stack) => { msg.Id = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.name = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.content = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.description = buf.toString(); }); 
retStack.push((buf, stack) => { msg.iconId = buf.readInt32LE(0); });;
 return retStack;
}
case 133: { // ReflectionInfo
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.ShortName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.FullName = buf.toString(); }); 
retStack.push((buf, stack) => { msg.IsMarker = buf.readUInt8(0)[0] === 1 });
retStack.push((buf, stack) => { msg.CanParseEmptyString = buf.readUInt8(0)[0] === 1 });;
 return retStack;
}
case 134: { // ParseTreeReflectionStruct
msg.info = cast<Msg.ReflectionInfo>(<Msg.Message>{ MsgId: 134 }); retStack.push(...GetDeserializer(msg.info))
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.description = buf.toString(); }); 
retStack.push((buf, stack) => { msg.kind = <Msg.ReflectionKind>buf.readInt32LE(0); });
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 134 }); retStack.push(...GetDeserializer(msg.span))
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.children = [];
				for (let i = 0; i < length; i++) {
                    msg.children.push(<Msg.ParseTreeReflectionStruct>{ MsgId: 134 });
					stack.push(...GetDeserializer(msg.children[i]));
				} });
;
 return retStack;
}
case 135: { // GrammarDescriptor
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.FullName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.AssemblyLocation = buf.toString(); }); ;
 return retStack;
}
case 136: { // LibReference
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Name = buf.toString(); }); ;
 return retStack;
}
case 137: { // Fail_ContentDescriptor
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.msg = buf.toString(); }); ;
 return retStack;
}
case 138: { // Members_ContentDescriptor
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });
;
 return retStack;
}
case 139: { // Items_ContentDescriptor
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.items = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.items[i]));
				} });
;
 return retStack;
}
case 140: { // AstItems_ContentDescriptor
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });

retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.items = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.items[i]));
				} });
;
 return retStack;
}
case 141: { // Unknown_ObjectDescriptor
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.str = buf.toString(); }); ;
 return retStack;
}
case 142: { // Null_ObjectDescriptor
;
 return retStack;
}
case 143: { // NotEvaluated_ObjectDescriptor
;
 return retStack;
}
case 144: { // Ast_ObjectDescriptor
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 144 }); retStack.push(...GetDeserializer(msg.span))
retStack.push((buf, stack) => { msg.id = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.str = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeFullName = buf.toString(); }); 
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });
;
 return retStack;
}
case 145: { // Symbol_ObjectDescriptor
retStack.push((buf, stack) => { msg.id = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.name = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.fullName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeFullName = buf.toString(); }); 
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });
;
 return retStack;
}
case 146: { // Object_ObjectDescriptor
retStack.push((buf, stack) => { msg.id = buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.str = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeName = buf.toString(); }); 
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.typeFullName = buf.toString(); }); 
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });
;
 return retStack;
}
case 147: { // AstList_ObjectDescriptor
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 147 }); retStack.push(...GetDeserializer(msg.span))
retStack.push((buf, stack) => { msg.id = buf.readInt32LE(0); });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.items = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.items[i]));
				} });

retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.members = [];
				for (let i = 0; i < length; i++) {
                    msg.members.push(<Msg.PropertyDescriptor>{ MsgId: 163 });
					stack.push(...GetDeserializer(msg.members[i]));
				} });

retStack.push((buf, stack) => { msg.count = buf.readInt32LE(0); });;
 return retStack;
}
case 148: { // Seq_ObjectDescriptor
retStack.push((buf, stack) => { msg.id = buf.readInt32LE(0); });
retStack.push((buf,stack) => {
let length = buf.readInt32LE(0);
				msg.items = [];
				for (let i = 0; i < length; i++) {
					stack.push(...GetDeserializer(msg.items[i]));
				} });

retStack.push((buf, stack) => { msg.count = buf.readInt32LE(0); });;
 return retStack;
}
case 149: { // String_ObjectDescriptor
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.value = buf.toString(); }); ;
 return retStack;
}
case 150: { // Int16_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readInt16LE(0); });;
 return retStack;
}
case 151: { // Int32_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readInt32LE(0); });;
 return retStack;
}
case 152: { // Int64_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = new Int64(buf).valueOf() });;
 return retStack;
}
case 153: { // Char_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.toString(); });;
 return retStack;
}
case 154: { // SByte_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readUInt8(0); });;
 return retStack;
}
case 155: { // UInt16_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readInt16LE(0); });;
 return retStack;
}
case 156: { // UInt32_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readInt32LE(0); });;
 return retStack;
}
case 157: { // UInt64_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = new Int64(buf).valueOf() });;
 return retStack;
}
case 158: { // Byte_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readUInt8(0); });;
 return retStack;
}
case 159: { // Single_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readFloatLE(0); });;
 return retStack;
}
case 160: { // Double_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readDoubleLE(0); });;
 return retStack;
}
case 161: { // Boolean_ObjectDescriptor
retStack.push((buf, stack) => { msg.value = buf.readUInt8(0)[0] === 1 });;
 return retStack;
}
case 162: { // Parsed_ObjectDescriptor
msg.span = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 162 }); retStack.push(...GetDeserializer(msg.span))
retStack.push(...GetDeserializer(msg.value));;
 return retStack;
}
case 163: { // PropertyDescriptor
retStack.push((buf, stack) => { msg.Kind = <Msg.PropertyKind>buf.readInt32LE(0); });
retStack.push((buf, stack) => {   }); retStack.push((buf, stack) => { msg.Name = buf.toString(); }); 
retStack.push(...GetDeserializer(msg.Object));;
 return retStack;
}
case 164: { // MatchBrackets
msg.Open = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 164 }); retStack.push(...GetDeserializer(msg.Open))
msg.Close = cast<Msg.NSpan>(<Msg.Message>{ MsgId: 164 }); retStack.push(...GetDeserializer(msg.Close));
 return retStack;
}
case 165: { // VersionedPos
retStack.push((buf, stack) => { msg.Pos = buf.readInt32LE(0); });
retStack.push((buf, stack) => { msg.Version = { Value: buf.readInt32LE(0) }; });;
 return retStack;
}
}
}
