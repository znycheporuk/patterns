import { Client } from "~/interpreter/client.ts";


const client = new Client();

const res1 = client.process("2 - 4 + 7 + 1");
const res2 = client.process("7 + 8 - 5 - 2");
const res3 = client.process("4 - 5 + 7 - 3 + 2 - 1 + 4 - 6 + 8 - 9 + 10");

console.log(res1, res2, res3);
