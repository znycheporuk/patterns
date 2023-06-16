import { describe, expect, it } from "bun:test";
import { Blackboard } from "~/blackboard/blackboard.ts";
import { KnowledgeSource1, KnowledgeSource2 } from "~/blackboard/knowledge-sources.ts";


describe("Knowledge Sources", () => {
	it("adds own knowledge to blackboard", () => {
		const blackboard = new Blackboard();

		const ks1 = new KnowledgeSource1();
		const ks2 = new KnowledgeSource2();

		ks1.processKnowledge(blackboard);
		ks2.processKnowledge(blackboard);

		const finalResult = blackboard.getData();
		expect(finalResult).toStrictEqual(["Processed by Knowledge Source 1", "Processed by Knowledge Source 2"].join(", "));
	});
});
