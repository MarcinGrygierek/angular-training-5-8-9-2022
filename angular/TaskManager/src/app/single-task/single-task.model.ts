export enum TaskStatus {
    New,
    InProgress,
    Done
}

export interface Task {
    id: number;
    name: string;
    status: TaskStatus;
    hidden: boolean;
}