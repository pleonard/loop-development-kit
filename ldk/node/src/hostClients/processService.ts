import { StoppableStream, StreamListener } from './stoppables';

// eslint-disable-next-line no-shadow
export enum ProcessStreamAction {
  Unknown = 'unknown',
  Started = 'started',
  Stopped = 'stopped',
}

export interface ProcessInfoResponse {
  pid: number;
  command: string;
  arguments: string;
}

export interface ProcessStreamResponse {
  process: ProcessInfoResponse;
  action: ProcessStreamAction;
}

export interface ProcessListResponse {
  processes: ProcessInfoResponse[];
}

/**
 * The ProcessService provides access to the list of running processes.
 */
export interface ProcessService {
  /**
   * Gets a list of the current running processes.
   *
   * @returns a Promise resolving with a list of the current processes.
   */
  queryProcesses(): Promise<ProcessListResponse>;

  /**
   * Starts listening for processes starting and stopping.
   *
   * @param listener - Listener function called every time a process is started or stopped.
   */
  streamProcesses(
    listener: StreamListener<ProcessStreamResponse>,
  ): StoppableStream<ProcessStreamResponse>;
}