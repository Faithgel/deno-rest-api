// import application from deno oak module to use oak framework with lastest version of framework
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
const PORT = Deno.env.get("PORT") || "8080";

const app = new Application();

app.use((ctx) => {
      ctx.response.body = "Hello World!";
});
console.log("Server is running on port http://localhost:8000");
await app.listen({ port: +PORT });