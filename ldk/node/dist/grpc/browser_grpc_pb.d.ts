export namespace BrowserService {
    namespace browserActiveURL {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof import("./browser_pb.js").BrowserActiveURLRequest;
        export const responseType: typeof import("./browser_pb.js").BrowserActiveURLResponse;
        export { serialize_proto_BrowserActiveURLRequest as requestSerialize };
        export { deserialize_proto_BrowserActiveURLRequest as requestDeserialize };
        export { serialize_proto_BrowserActiveURLResponse as responseSerialize };
        export { deserialize_proto_BrowserActiveURLResponse as responseDeserialize };
    }
    namespace browserActiveURLStream {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof import("./browser_pb.js").BrowserActiveURLStreamRequest;
        export { requestType_1 as requestType };
        const responseType_1: typeof import("./browser_pb.js").BrowserActiveURLStreamResponse;
        export { responseType_1 as responseType };
        export { serialize_proto_BrowserActiveURLStreamRequest as requestSerialize };
        export { deserialize_proto_BrowserActiveURLStreamRequest as requestDeserialize };
        export { serialize_proto_BrowserActiveURLStreamResponse as responseSerialize };
        export { deserialize_proto_BrowserActiveURLStreamResponse as responseDeserialize };
    }
    namespace browserSelectedText {
        const path_2: string;
        export { path_2 as path };
        const requestStream_2: boolean;
        export { requestStream_2 as requestStream };
        const responseStream_2: boolean;
        export { responseStream_2 as responseStream };
        const requestType_2: typeof import("./browser_pb.js").BrowserSelectedTextRequest;
        export { requestType_2 as requestType };
        const responseType_2: typeof import("./browser_pb.js").BrowserSelectedTextResponse;
        export { responseType_2 as responseType };
        export { serialize_proto_BrowserSelectedTextRequest as requestSerialize };
        export { deserialize_proto_BrowserSelectedTextRequest as requestDeserialize };
        export { serialize_proto_BrowserSelectedTextResponse as responseSerialize };
        export { deserialize_proto_BrowserSelectedTextResponse as responseDeserialize };
    }
    namespace browserSelectedTextStream {
        const path_3: string;
        export { path_3 as path };
        const requestStream_3: boolean;
        export { requestStream_3 as requestStream };
        const responseStream_3: boolean;
        export { responseStream_3 as responseStream };
        const requestType_3: typeof import("./browser_pb.js").BrowserSelectedTextStreamRequest;
        export { requestType_3 as requestType };
        const responseType_3: typeof import("./browser_pb.js").BrowserSelectedTextStreamResponse;
        export { responseType_3 as responseType };
        export { serialize_proto_BrowserSelectedTextStreamRequest as requestSerialize };
        export { deserialize_proto_BrowserSelectedTextStreamRequest as requestDeserialize };
        export { serialize_proto_BrowserSelectedTextStreamResponse as responseSerialize };
        export { deserialize_proto_BrowserSelectedTextStreamResponse as responseDeserialize };
    }
}
export var BrowserClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
declare function serialize_proto_BrowserActiveURLRequest(arg: any): Buffer;
declare function deserialize_proto_BrowserActiveURLRequest(buffer_arg: any): import("./browser_pb.js").BrowserActiveURLRequest;
declare function serialize_proto_BrowserActiveURLResponse(arg: any): Buffer;
declare function deserialize_proto_BrowserActiveURLResponse(buffer_arg: any): import("./browser_pb.js").BrowserActiveURLResponse;
declare function serialize_proto_BrowserActiveURLStreamRequest(arg: any): Buffer;
declare function deserialize_proto_BrowserActiveURLStreamRequest(buffer_arg: any): import("./browser_pb.js").BrowserActiveURLStreamRequest;
declare function serialize_proto_BrowserActiveURLStreamResponse(arg: any): Buffer;
declare function deserialize_proto_BrowserActiveURLStreamResponse(buffer_arg: any): import("./browser_pb.js").BrowserActiveURLStreamResponse;
declare function serialize_proto_BrowserSelectedTextRequest(arg: any): Buffer;
declare function deserialize_proto_BrowserSelectedTextRequest(buffer_arg: any): import("./browser_pb.js").BrowserSelectedTextRequest;
declare function serialize_proto_BrowserSelectedTextResponse(arg: any): Buffer;
declare function deserialize_proto_BrowserSelectedTextResponse(buffer_arg: any): import("./browser_pb.js").BrowserSelectedTextResponse;
declare function serialize_proto_BrowserSelectedTextStreamRequest(arg: any): Buffer;
declare function deserialize_proto_BrowserSelectedTextStreamRequest(buffer_arg: any): import("./browser_pb.js").BrowserSelectedTextStreamRequest;
declare function serialize_proto_BrowserSelectedTextStreamResponse(arg: any): Buffer;
declare function deserialize_proto_BrowserSelectedTextStreamResponse(buffer_arg: any): import("./browser_pb.js").BrowserSelectedTextStreamResponse;
export {};