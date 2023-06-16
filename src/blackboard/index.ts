import { Blackboard } from "~/blackboard/blackboard.ts";
import { KnowledgeSource1, KnowledgeSource2 } from "~/blackboard/knowledge-sources.ts";


const blackboard = new Blackboard();

const ks1 = new KnowledgeSource1();
const ks2 = new KnowledgeSource2();

ks1.processKnowledge(blackboard);
ks2.processKnowledge(blackboard);

const finalResult = blackboard.getData();

console.log(finalResult);
