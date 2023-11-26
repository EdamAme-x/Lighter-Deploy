import { pushProject } from "../pushProject.ts";

const { args } = Deno;

if (args[0]) {
    console.log(await pushProject(args[0], `
import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono;

app.get("/", c => c.text("Hello Hono 🙌"));

Deno.serve(app.fetch)
`))
}else {
    Deno.exit(1)
}

// Init Push