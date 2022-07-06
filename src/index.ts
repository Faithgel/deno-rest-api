import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const PORT = parseInt(Deno.env.get("PORT") || "5000");
const app = new Application();

app.use((ctx) => {
      ctx.response.body = "Hello World!";
});

console.log(`Listening on port ${PORT}`);
await app.listen({port: +PORT});