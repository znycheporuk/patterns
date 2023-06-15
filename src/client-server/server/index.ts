import { Client } from "~/client-server/client";


const port = 8080;

const server = Bun.serve({
	port,
	fetch() {
		return new Response("Hello world!");
	},
});

const client = new Client(port);
await client.connectToServer();

export { server };
