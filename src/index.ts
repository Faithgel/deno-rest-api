import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const PORT = Deno.env.get("PORT") || "5000";
const app = new Application();

app.use((ctx) => {
      ctx.response.body = "Hello World!";
});

await app.listen({port: +PORT});