import { Peer } from "~/peer-to-peer/peer.ts";


const p1 = new Peer("Peer 1");
const p2 = new Peer("Peer 2");
const p3 = new Peer("Peer 3");

p1.connect(p2);
p1.connect(p3);
p2.connect(p3)
p3.connect(p1);

p1.send("1");
p2.send("2");
p3.send("3");

p1.disconnect(p2);
p3.disconnect(p1);

p1.send("4");
p2.send("5");
p3.send("6");

