import { afterAll, describe, expect, it } from "bun:test";
import { server } from "~/client-server/server/index.ts";


describe("server", () => {
  afterAll(() => {
    server.stop();
  });

  describe("GET /", () => {
    it("should respond with correct message", async () => {
      const res = await server.fetch("/");
      const text = await res.text();
      expect(res.status).toBe(200);
      expect(text).toBe("Hello world!");
    });
  });
});
