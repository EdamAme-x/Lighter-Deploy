import "https://deno.land/std@0.191.0/dotenv/load.ts";

export async function createProject(name: string) {
  const organizationId = Deno.env.get("ORG_ID");
  const token = Deno.env.get("ACCESS_TOKEN");

  const res = await fetch(
    `https://api.deno.com/v1/organizations/${organizationId}/projects`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: null,
        description: name,
      }),
    }
  );

  const project = await res.json();
  console.log(project);
}
