import Elysia from "elysia";
import { BrandController } from "./brand.controller";
import type { Brand } from "./brand.type";

export const brandRoutes = new Elysia({ prefix: "/brands" })
  .get("/", () => BrandController.getAll())
  .get("/:id", ({ params: { id } }) => BrandController.getById(id))
  .put(
    "/:id",
    ({ params: { id }, body }: { params: { id: string }; body: Brand }) =>
      BrandController.updateById(id, body)
  )
  .delete("/:id", ({ params: { id } }) => BrandController.deleteById(id))
  .post("/", ({ body }: { body: Brand }) => BrandController.createBrand(body));
