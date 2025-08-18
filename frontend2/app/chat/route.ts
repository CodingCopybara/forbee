// /workspace/forbee/frontend2/app/chat/route.ts

const GW = process.env.NEXT_PUBLIC_GW_BASE || "http://127.0.0.1:8088";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${GW}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type") || "application/json";
    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: { "Content-Type": contentType },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "NEXT_PROXY_ERROR", detail: error?.message || String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
