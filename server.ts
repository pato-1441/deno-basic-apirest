import { Application, config } from "./deps.ts";
import { router } from "./router/index.ts";

const { PORT } = config();
const app = new Application();

app.use(router.routes());


console.log(`Server listening on port: ${PORT}`);
await app.listen({ port: Number(PORT) });
