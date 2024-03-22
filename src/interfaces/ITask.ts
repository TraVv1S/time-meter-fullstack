export interface ITask {
    id: number;
    title: string;
    project: string;
    startedAt: Date;
    finishedAt?: Date;
    isStarted: boolean
}

export type ITaskFinished = Required<ITask> 