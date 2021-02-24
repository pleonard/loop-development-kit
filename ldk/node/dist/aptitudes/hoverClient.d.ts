import BaseClient, { GRPCClientConstructor } from './baseClient';
import { HoverClient as HoverGRPCClient } from '../grpc/hover_grpc_pb';
import { Hover, HoverReadRequest, HoverResponse } from './hover';
import { StoppableStream, StreamListener } from './stoppables';
/**
 * @internal
 */
export declare class HoverClient extends BaseClient<HoverGRPCClient> implements Hover {
    protected generateClient(): GRPCClientConstructor<HoverGRPCClient>;
    queryHover(params: HoverReadRequest): Promise<HoverResponse>;
    streamHover(params: HoverReadRequest, listener: StreamListener<HoverResponse>): StoppableStream<HoverResponse>;
    protected serviceName(): string;
}