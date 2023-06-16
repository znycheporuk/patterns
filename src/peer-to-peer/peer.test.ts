import { describe, expect, it } from "bun:test";
import { Peer } from "~/peer-to-peer/peer.ts";


describe("Peer", () => {

	it("should connect peers", async () => {
		const p1 = new Peer("Peer 1");
		const p2 = new Peer("Peer 2");
		const p3 = new Peer("Peer 3");
		p1.connect(p2);
		p1.connect(p3);

		const result = p1.getPeers();
		expect(result).toStrictEqual(new Set([p2, p3]));
	});

	it("should not connect duplicating peers", async () => {
		const p1 = new Peer("Peer 1");
		const p2 = new Peer("Peer 2");
		const p3 = new Peer("Peer 3");
		p1.connect(p2);
		p1.connect(p3);
		p1.connect(p2);

		const result = p1.getPeers();
		expect(result).toStrictEqual(new Set([p2, p3]));
	});

	it("should disconnect peers", async () => {
		const p1 = new Peer("Peer 1");
		const p2 = new Peer("Peer 2");
		p1.connect(p2);
		p1.disconnect(p2);

		const result = p1.getPeers();

		expect(result).toStrictEqual(new Set());
	});
});
