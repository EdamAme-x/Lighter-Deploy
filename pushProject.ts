import "https://deno.land/std@0.191.0/dotenv/load.ts";

export async function pushProject(name: string, content: string) {
  const organizationId = Deno.env.get("ORG_ID");
  const token = Deno.env.get("ACCESS_TOKEN");

  const res = await fetch(
    `https://api.deno.com/v1/projects/50cdecb5-e0aa-4181-a7d3-260e76880501/deployments`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        entryPointUrl: "main.ts",
        envVars: {},
        description: name,
        assets: {
          "main.ts": {
            kind: "file",
            content: content.trim(),
          },
        },
      }),
    }
  );

  const deployment = await res.json();

  return deployment;
}
