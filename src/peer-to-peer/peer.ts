export class Peer {
	readonly name: string;
	private peers = new Set<Peer>();

	constructor(name: string) {
		this.name = name;
	}

	getPeers() {
		return this.peers;
	}

	connect(peer: Peer) {
		this.peers.add(peer);
	}

	disconnect(peer: Peer) {
		this.peers.delete(peer);
	}

	send(data: string) {
		console.log(`"${data}" was sent by ${this.name}`);
		this.peers.forEach((peer) => peer.receive(data));
	}

	receive(data: string) {
		console.log(`"${data}" was received by ${this.name}`);
	}
}
