import { Blackboard } from "~/blackboard/blackboard.ts";


export class KnowledgeSource1 {
	processKnowledge(blackboard: Blackboard) {
		blackboard.addData("Processed by Knowledge Source 1");
	}
}

export class KnowledgeSource2 {
	processKnowledge(blackboard: Blackboard) {
		blackboard.addData("Processed by Knowledge Source 2");
	}
}
