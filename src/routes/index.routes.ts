import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const router = new Router();

router.get('/', ({response}) => {
    response.body = "Hello World!";
});

router.get('/api/v1/users', ({response}) => {
    response.body = "This is the users endpoint! Just a placeholder for now.";
});

export default router;