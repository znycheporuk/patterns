export class Client {
	private readonly port: number;

	constructor(port: number) {
		this.port = port;
	}

	async connectToServer() {
		const res = await fetch(`http://localhost:${this.port}`);
		const data = await res.text();

		console.log("Client connected");

		return data;
	}
}
