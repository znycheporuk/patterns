import { describe, expect, it } from "bun:test";
import { Master } from "~/master-slave/master/index.ts";


describe("Master", () => {
	
	it("should executeTasks correctly", async () => {
		const master = new Master();
		const tasks = ["task1", "task2", "task3"];
		const result = master.executeTasks(tasks);

		const expectedResult = tasks.map(task => `${task} was executed by slave`);

		expect(result).toStrictEqual(expectedResult);
	});
});
