// package: nestlabs.gateway.v2
// file: nest.gateway.proto

import * as nest_gateway_pb from "./nest.gateway_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GatewayServiceObserve = {
  readonly methodName: string;
  readonly service: typeof GatewayService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof nest_gateway_pb.ObserveRequest;
  readonly responseType: typeof nest_gateway_pb.ObserveResponse;
};

export class GatewayService {
  static readonly serviceName: string;
  static readonly Observe: GatewayServiceObserve;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GatewayServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  observe(requestMessage: nest_gateway_pb.ObserveRequest, metadata?: grpc.Metadata): ResponseStream<nest_gateway_pb.ObserveResponse>;
}

