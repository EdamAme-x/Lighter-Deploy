import { createProject } from "../createProject.ts";

const { args } = Deno;

if (args[0]) {
    console.log(await createProject(args[0]))
}else {
    Deno.exit(1)
}