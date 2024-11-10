import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { brandRoutes } from "./features/brands/brand.routes";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      origin: "http://127.0.0.1:5173", // Svelte dev server
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )
  .get("/", () => "Hello Elysia")
  .group("/api", (app) => app.use(brandRoutes))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
