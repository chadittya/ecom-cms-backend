import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { brandRoutes } from "./features/brands/brand.routes";

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .group("/api", (app) => app.use(brandRoutes))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
