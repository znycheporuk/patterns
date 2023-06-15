import { describe, expect, it } from "bun:test";
import { data } from "~/layered_architecture/database/data.ts";
import { BusinessLogicLayer } from "~/layered_architecture/domain/business-logic.ts";


describe("BusinessLogicLayer", () => {
  const businessLogicLayer = new BusinessLogicLayer();

  describe("getById function", () => {
    it("finds existing entity", async () => {
      const id = data[0].id;
      const result = businessLogicLayer.getById(id);

      expect(result).toMatchObject(data[0]);
    });

    it("properly handles non found", async () => {
      const nonExistingId = 24;
      const entity = businessLogicLayer.getById(nonExistingId)
      expect(entity).toBe(undefined);
    });
  });
});
