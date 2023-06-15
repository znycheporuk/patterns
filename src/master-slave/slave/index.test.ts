import { describe, expect, it } from "bun:test";
import { Slave } from "~/master-slave/slave/index.ts";


describe("Slave", () => {

	it("should execute correctly", async () => {
		const slave = new Slave();
		const task = "Test task";
		const result = slave.executeTask(task);

		expect(result).toStrictEqual(`${task} was executed by slave`);
	});
});
