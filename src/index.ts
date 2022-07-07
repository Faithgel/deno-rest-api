// import application from deno oak module
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
//import router from deno oak module
import router from "./routes/index.routes.ts";

const PORT = Deno.env.get("PORT") || "8080";

const app = new Application();

app.use(router.routes());
console.log("Server is running on port http://localhost:" + PORT);
await app.listen({ port: +PORT });