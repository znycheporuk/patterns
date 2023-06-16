import { describe, expect, it } from "bun:test";
import { Blackboard } from "~/blackboard/blackboard.ts";


describe("Blackboard", () => {
	it("returns proper knowledge", () => {
		const blackboard = new Blackboard();
		blackboard.addData("Knowledge 1");
		blackboard.addData("Knowledge 2");
		expect(blackboard.getData()).toStrictEqual(["Knowledge 1", "Knowledge 2"].join(", "));
	});
});
