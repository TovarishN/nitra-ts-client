export interface SolutionId { Value: number; }
export interface ProjectId { Value: number; }
export interface FileId { Value: number; }
export interface FileVersion { Value: number; }
export type FileChange = Insert_FileChange | Delete_FileChange | Replace_FileChange;
export type ObjectDescriptor = Ast_ObjectDescriptor | AstList_ObjectDescriptor | Boolean_ObjectDescriptor | Byte_ObjectDescriptor | Char_ObjectDescriptor
    | Double_ObjectDescriptor | Int16_ObjectDescriptor | Int32_ObjectDescriptor | Int64_ObjectDescriptor
    | NotEvaluated_ObjectDescriptor | Null_ObjectDescriptor | Object_ObjectDescriptor | Parsed_ObjectDescriptor
    | SByte_ObjectDescriptor | Seq_ObjectDescriptor | Single_ObjectDescriptor | String_ObjectDescriptor
    | Symbol_ObjectDescriptor | UInt16_ObjectDescriptor | UInt32_ObjectDescriptor | UInt64_ObjectDescriptor | Unknown_ObjectDescriptor;

export type ContentDescriptor = AstItems_ContentDescriptor | Fail_ContentDescriptor | Items_ContentDescriptor | Members_ContentDescriptor;
export type CompletionElem = Literal_CompletionElem | Symbol_CompletionElem;
export type Message = CheckVersion_ClientMessage | SolutionStartLoading_ClientMessage | SolutionLoaded_ClientMessage | SolutionUnloaded_ClientMessage 
                    | ProjectStartLoading_ClientMessage | ProjectLoaded_ClientMessage | ProjectUnloaded_ClientMessage | ProjectRename_ClientMessage 
                    | ProjectReferenceLoaded_ClientMessage | ProjectReferenceUnloaded_ClientMessage | ReferenceLoaded_ClientMessage | ReferenceUnloaded_ClientMessage 
                    | FileLoaded_ClientMessage | FileReparse_ClientMessage | FileUnloaded_ClientMessage | FileRenamed_ClientMessage | FileInMemoryLoaded_ClientMessage 
                    | FileActivated_ClientMessage | FileDeactivated_ClientMessage | FileChanged_ClientMessage | FileChangedBatch_ClientMessage | PrettyPrint_ClientMessage 
                    | CompleteWord_ClientMessage | CompleteWordDismiss_ClientMessage | FindSymbolReferences_ClientMessage | FindSymbolDefinitions_ClientMessage | ParseTreeReflection_ClientMessage 
                    | GetObjectContent_ClientMessage | GetObjectGraph_ClientMessage | AttachDebugger_ClientMessage | GetLibsMetadata_ClientMessage | GetLibsSyntaxModules_ClientMessage 
                    | GetLibsProjectSupports_ClientMessage | GetFileExtensions_ClientMessage | SetCaretPos_ClientMessage | GetHint_ClientMessage | GetSubHint_ClientMessage 
                    | FindDeclarations_ClientMessage | Shutdown_ClientMessage | FindSymbolDefinitions_ServerMessage | FindSymbolReferences_ServerMessage 
                    | ParseTreeReflection_ServerMessage | ObjectContent_ServerMessage | LibsMetadata_ServerMessage | LibsSyntaxModules_ServerMessage | LibsProjectSupports_ServerMessage 
                    | FileExtensions_ServerMessage | SubHint_ServerMessage | LanguageLoaded_AsyncServerMessage | OutliningCreated_AsyncServerMessage | KeywordsHighlightingCreated_AsyncServerMessage 
                    | MatchedBrackets_AsyncServerMessage | SymbolsHighlightingCreated_AsyncServerMessage | ProjectLoadingMessages_AsyncServerMessage | ParsingMessages_AsyncServerMessage 
                    | MappingMessages_AsyncServerMessage | SemanticAnalysisMessages_AsyncServerMessage | SemanticAnalysisDone_AsyncServerMessage | PrettyPrintCreated_AsyncServerMessage 
                    | ReflectionStructCreated_AsyncServerMessage | RefreshReferencesFailed_AsyncServerMessage | RefreshProjectFailed_AsyncServerMessage | FindSymbolReferences_AsyncServerMessage 
                    | Hint_AsyncServerMessage | Exception_AsyncServerMessage | FoundDeclarations_AsyncServerMessage | CompleteWord_AsyncServerMessage | ProjectSupports | SyntaxModules 
                    | LibMetadata | SymbolRreferences | NSpan | SpanInfo | Insert_FileChange | Delete_FileChange | Replace_FileChange | FileIdentity | FileEntries | Range | Location 
                    | DeclarationInfo | SymbolLocation | CompilerMessage | ProjectSupport | Config | DynamicExtensionInfo | LanguageInfo | SpanClassInfo | OutliningInfo | Literal_CompletionElem 
                    | Symbol_CompletionElem | ReflectionInfo | ParseTreeReflectionStruct | GrammarDescriptor | LibReference | Fail_ContentDescriptor | Members_ContentDescriptor 
                    | Items_ContentDescriptor | AstItems_ContentDescriptor | Unknown_ObjectDescriptor | Null_ObjectDescriptor | NotEvaluated_ObjectDescriptor | Ast_ObjectDescriptor 
                    | Symbol_ObjectDescriptor | Object_ObjectDescriptor | AstList_ObjectDescriptor | Seq_ObjectDescriptor | String_ObjectDescriptor | Int16_ObjectDescriptor 
                    | Int32_ObjectDescriptor | Int64_ObjectDescriptor | Char_ObjectDescriptor | SByte_ObjectDescriptor | UInt16_ObjectDescriptor | UInt32_ObjectDescriptor 
                    | UInt64_ObjectDescriptor | Byte_ObjectDescriptor | Single_ObjectDescriptor | Double_ObjectDescriptor | Boolean_ObjectDescriptor | Parsed_ObjectDescriptor 
                    | PropertyDescriptor | MatchBrackets | VersionedPos;
export enum PrettyPrintState { Disabled,Text, Html }
export enum CompilerMessageSource { ProjectLoading,Parsing, Mapping, SemanticAnalysis }
export enum CompilerMessageType { FatalError,Error, Warning, Hint }
export enum ReflectionKind { Normal,Recovered, Ambiguous, Deleted }
export enum PropertyKind { Simple,DependentIn, DependentOut, DependentInOut, Ast }

export interface CheckVersion_ClientMessage { MsgId: 42; assemblyVersionGuid: string; }
export interface SolutionStartLoading_ClientMessage { MsgId: 43; id: SolutionId; fullPath: string; }
export interface SolutionLoaded_ClientMessage { MsgId: 44; id: SolutionId; }
export interface SolutionUnloaded_ClientMessage { MsgId: 45; id: SolutionId; }
export interface ProjectStartLoading_ClientMessage { MsgId: 46; id: ProjectId; fullPath: string; config: Config; }
export interface ProjectLoaded_ClientMessage { MsgId: 47; id: ProjectId; }
export interface ProjectUnloaded_ClientMessage { MsgId: 48; id: ProjectId; }
export interface ProjectRename_ClientMessage { MsgId: 49; oldId: ProjectId; newId: ProjectId; newPath: string; }
export interface ProjectReferenceLoaded_ClientMessage { MsgId: 50; projectId: ProjectId; referencedProjectId: ProjectId; path: string; }
export interface ProjectReferenceUnloaded_ClientMessage { MsgId: 51; projectId: ProjectId; referencedProjectId: ProjectId; path: string; }
export interface ReferenceLoaded_ClientMessage { MsgId: 52; projectId: ProjectId; name: string; }
export interface ReferenceUnloaded_ClientMessage { MsgId: 53; projectId: ProjectId; name: string; }
export interface FileLoaded_ClientMessage { MsgId: 54; projectId: ProjectId; fullPath: string; id: FileId; version: FileVersion; }
export interface FileReparse_ClientMessage { MsgId: 55; id: FileId; }
export interface FileUnloaded_ClientMessage { MsgId: 56; projectId: ProjectId; id: FileId; }
export interface FileRenamed_ClientMessage { MsgId: 57; oldId: FileId; newId: FileId; newPath: string; }
export interface FileInMemoryLoaded_ClientMessage { MsgId: 58; projectId: ProjectId; id: FileId; name: string; content: string; }
export interface FileActivated_ClientMessage { MsgId: 59; projectId: ProjectId; id: FileId; version: FileVersion; }
export interface FileDeactivated_ClientMessage { MsgId: 60; projectId: ProjectId; id: FileId; }
export interface FileChanged_ClientMessage { MsgId: 61; id: FileId; version: FileVersion; change: FileChange; caretPos: VersionedPos; }
export interface FileChangedBatch_ClientMessage { MsgId: 62; id: FileId; version: FileVersion; changes: FileChange[]; caretPos: VersionedPos; }
export interface PrettyPrint_ClientMessage { MsgId: 63; state: PrettyPrintState; }
export interface CompleteWord_ClientMessage { MsgId: 64; projectId: ProjectId; id: FileId; version: FileVersion; pos: number; }
export interface CompleteWordDismiss_ClientMessage { MsgId: 65; projectId: ProjectId; id: FileId; }
export interface FindSymbolReferences_ClientMessage { MsgId: 66; projectId: ProjectId; fileId: FileId; pos: VersionedPos; }
export interface FindSymbolDefinitions_ClientMessage { MsgId: 67; projectId: ProjectId; fileId: FileId; pos: VersionedPos; }
export interface ParseTreeReflection_ClientMessage { MsgId: 68; enable: boolean; }
export interface GetObjectContent_ClientMessage { MsgId: 69; solutionId: SolutionId; projectId: ProjectId; fileId: FileId; fileVersion: FileVersion; objectId: number; }
export interface GetObjectGraph_ClientMessage { MsgId: 70; solutionId: SolutionId; projectId: ProjectId; fileId: FileId; fileVersion: FileVersion; objectId: number; }
export interface AttachDebugger_ClientMessage { MsgId: 71; }
export interface GetLibsMetadata_ClientMessage { MsgId: 72; libs: string[]; }
export interface GetLibsSyntaxModules_ClientMessage { MsgId: 73; libs: string[]; }
export interface GetLibsProjectSupports_ClientMessage { MsgId: 74; libs: string[]; }
export interface GetFileExtensions_ClientMessage { MsgId: 75; projectId: ProjectId; languageNames: string[]; }
export interface SetCaretPos_ClientMessage { MsgId: 76; projectId: ProjectId; fileId: FileId; pos: VersionedPos; }
export interface GetHint_ClientMessage { MsgId: 77; projectId: ProjectId; fileId: FileId; pos: VersionedPos; }
export interface GetSubHint_ClientMessage { MsgId: 78; projectId: ProjectId; symbolId: number; }
export interface FindDeclarations_ClientMessage { MsgId: 79; pattern: string; primaryProjectId: ProjectId; hideExternalItems: boolean; kinds: string[]; }
export interface Shutdown_ClientMessage { MsgId: 80; }
export interface FindSymbolDefinitions_ServerMessage { MsgId: 81; solutionId: SolutionId; referenceSpan: NSpan; definitions: SymbolLocation[]; }
export interface FindSymbolReferences_ServerMessage { MsgId: 82; solutionId: SolutionId; referenceSpan: NSpan; symbols: SymbolRreferences[]; }
export interface ParseTreeReflection_ServerMessage { MsgId: 83; solutionId: SolutionId; root: ParseTreeReflectionStruct[]; }
export interface ObjectContent_ServerMessage { MsgId: 84; solutionId: SolutionId; content: ContentDescriptor; }
export interface LibsMetadata_ServerMessage { MsgId: 85; solutionId: SolutionId; metadatas: LibMetadata[]; }
export interface LibsSyntaxModules_ServerMessage { MsgId: 86; solutionId: SolutionId; modules: SyntaxModules[]; }
export interface LibsProjectSupports_ServerMessage { MsgId: 87; solutionId: SolutionId; libs: ProjectSupports[]; }
export interface FileExtensions_ServerMessage { MsgId: 88; solutionId: SolutionId; fileExtensions: string[]; }
export interface SubHint_ServerMessage { MsgId: 89; text: string; }
export interface LanguageLoaded_AsyncServerMessage { MsgId: 90; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; spanClassInfos: SpanClassInfo[]; }
export interface OutliningCreated_AsyncServerMessage { MsgId: 91; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; outlining: OutliningInfo[]; }
export interface KeywordsHighlightingCreated_AsyncServerMessage { MsgId: 92; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; spanInfos: SpanInfo[]; }
export interface MatchedBrackets_AsyncServerMessage { MsgId: 93; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; results: MatchBrackets[]; }
export interface SymbolsHighlightingCreated_AsyncServerMessage { MsgId: 94; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; spanInfos: SpanInfo[]; }
export interface ProjectLoadingMessages_AsyncServerMessage { MsgId: 95; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; messages: CompilerMessage[]; }
export interface ParsingMessages_AsyncServerMessage { MsgId: 96; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; messages: CompilerMessage[]; }
export interface MappingMessages_AsyncServerMessage { MsgId: 97; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; messages: CompilerMessage[]; }
export interface SemanticAnalysisMessages_AsyncServerMessage { MsgId: 98; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; messages: CompilerMessage[]; }
export interface SemanticAnalysisDone_AsyncServerMessage { MsgId: 99; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; }
export interface PrettyPrintCreated_AsyncServerMessage { MsgId: 100; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; type: PrettyPrintState; text: string; }
export interface ReflectionStructCreated_AsyncServerMessage { MsgId: 101; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; root: ParseTreeReflectionStruct; }
export interface RefreshReferencesFailed_AsyncServerMessage { MsgId: 102; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; exception: string; }
export interface RefreshProjectFailed_AsyncServerMessage { MsgId: 103; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; exception: string; }
export interface FindSymbolReferences_AsyncServerMessage { MsgId: 104; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; referenceSpan: NSpan; symbols: SymbolRreferences[]; }
export interface Hint_AsyncServerMessage { MsgId: 105; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; text: string; referenceSpan: NSpan; }
export interface Exception_AsyncServerMessage { MsgId: 106; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; exception: string; }
export interface FoundDeclarations_AsyncServerMessage { MsgId: 107; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; projectId: ProjectId; declarations: DeclarationInfo[]; }
export interface CompleteWord_AsyncServerMessage { MsgId: 108; FileId: FileId; Version: FileVersion; SolutionId: SolutionId; replacementSpan: NSpan; completionList: CompletionElem[]; }
export interface ProjectSupports { MsgId: 109; ProjectSupports: ProjectSupport[]; }
export interface SyntaxModules { MsgId: 110; Modules: string[]; }
export interface LibMetadata { MsgId: 111; ProjectSupprts: string[]; Languages: LanguageInfo[]; }
export interface SymbolRreferences { MsgId: 112; SymbolId: number; Definitions: SymbolLocation[]; References: FileEntries[]; }
export interface NSpan { MsgId: 113; StartPos: number; EndPos: number; }
export interface SpanInfo { MsgId: 114; Span: NSpan; SpanClassId: number; }
export interface Insert_FileChange { MsgId: 115; pos: number; text: string; }
export interface Delete_FileChange { MsgId: 116; span: NSpan; }
export interface Replace_FileChange { MsgId: 117; span: NSpan; text: string; }
export interface FileIdentity { MsgId: 118; FileId: FileId; FileVersion: FileVersion; }
export interface FileEntries { MsgId: 119; File: FileIdentity; Ranges: Range[]; }
export interface Range { MsgId: 122; Span: NSpan; StartLine: number; StartColumn: number; EndLine: number; EndColumn: number; Text: string; }
export interface Location { MsgId: 123; File: FileIdentity; Range: Range; }
export interface DeclarationInfo { MsgId: 120; SymbolId: number; Name: string; NameMatchRuns: NSpan[]; FullName: string; Kind: string; SpanClassId: number; Location: Location; }
export interface SymbolLocation { MsgId: 121; SymbolId: number; Location: Location; }
export interface CompilerMessage { MsgId: 124; Type: CompilerMessageType; Location: Location; Text: string; Number: number; Source: CompilerMessageSource; NestedMessages: CompilerMessage[]; }
export interface ProjectSupport { MsgId: 125; Caption: string; TypeFullName: string; Path: string; }
export interface Config { MsgId: 126; ProjectSupport: ProjectSupport; Languages: LanguageInfo[]; References: string[]; }
export interface DynamicExtensionInfo { MsgId: 127; Name: string; Path: string; }
export interface LanguageInfo { MsgId: 128; Name: string; Path: string; DynamicExtensions: DynamicExtensionInfo[]; }
export interface SpanClassInfo { MsgId: 129; FullName: string; Id: number; ForegroundColor: number; }
export interface OutliningInfo { MsgId: 130; Span: NSpan; IsDefaultCollapsed: boolean; IsImplementation: boolean; }
export interface Literal_CompletionElem { MsgId: 131; text: string; description: string; }
export interface Symbol_CompletionElem { MsgId: 132; Id: number; name: string; content: string; description: string; iconId: number; }
export interface ReflectionInfo { MsgId: 133; ShortName: string; FullName: string; IsMarker: boolean; CanParseEmptyString: boolean; }
export interface ParseTreeReflectionStruct { MsgId: 134; info: ReflectionInfo; description: string; kind: ReflectionKind; span: NSpan; children: ParseTreeReflectionStruct[]; }
export interface GrammarDescriptor { MsgId: 135; FullName: string; AssemblyLocation: string; }
export interface LibReference { MsgId: 136; Name: string; }
export interface Fail_ContentDescriptor { MsgId: 137; msg: string; }
export interface Members_ContentDescriptor { MsgId: 138; members: PropertyDescriptor[]; }
export interface Items_ContentDescriptor { MsgId: 139; items: ObjectDescriptor[]; }
export interface AstItems_ContentDescriptor { MsgId: 140; members: PropertyDescriptor[]; items: ObjectDescriptor[]; }
export interface Unknown_ObjectDescriptor { MsgId: 141; str: string; }
export interface Null_ObjectDescriptor { MsgId: 142; }
export interface NotEvaluated_ObjectDescriptor { MsgId: 143; }
export interface Ast_ObjectDescriptor { MsgId: 144; span: NSpan; id: number; str: string; typeName: string; typeFullName: string; members: PropertyDescriptor[]; }
export interface Symbol_ObjectDescriptor { MsgId: 145; id: number; name: string; fullName: string; typeName: string; typeFullName: string; members: PropertyDescriptor[]; }
export interface Object_ObjectDescriptor { MsgId: 146; id: number; str: string; typeName: string; typeFullName: string; members: PropertyDescriptor[]; }
export interface AstList_ObjectDescriptor { MsgId: 147; span: NSpan; id: number; items: ObjectDescriptor[]; members: PropertyDescriptor[]; count: number; }
export interface Seq_ObjectDescriptor { MsgId: 148; id: number; items: ObjectDescriptor[]; count: number; }
export interface String_ObjectDescriptor { MsgId: 149; value: string; }
export interface Int16_ObjectDescriptor { MsgId: 150; value: number; }
export interface Int32_ObjectDescriptor { MsgId: 151; value: number; }
export interface Int64_ObjectDescriptor { MsgId: 152; value: number; }
export interface Char_ObjectDescriptor { MsgId: 153; value: string; }
export interface SByte_ObjectDescriptor { MsgId: 154; value: number; }
export interface UInt16_ObjectDescriptor { MsgId: 155; value: number; }
export interface UInt32_ObjectDescriptor { MsgId: 156; value: number; }
export interface UInt64_ObjectDescriptor { MsgId: 157; value: number; }
export interface Byte_ObjectDescriptor { MsgId: 158; value: number; }
export interface Single_ObjectDescriptor { MsgId: 159; value: number; }
export interface Double_ObjectDescriptor { MsgId: 160; value: number; }
export interface Boolean_ObjectDescriptor { MsgId: 161; value: boolean; }
export interface Parsed_ObjectDescriptor { MsgId: 162; span: NSpan; value: ObjectDescriptor; }
export interface PropertyDescriptor { MsgId: 163; Kind: PropertyKind; Name: string; Object: ObjectDescriptor; }
export interface MatchBrackets { MsgId: 164; Open: NSpan; Close: NSpan; }
export interface VersionedPos { MsgId: 165; Pos: number; Version: FileVersion; }
