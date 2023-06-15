import { Slave } from "~/master-slave/slave";


export class Master {
	executeTasks = (tasks: string[]): string[] => tasks.reduce((acc, task) => [...acc, new Slave().executeTask(task)], [] as string[]);
}
