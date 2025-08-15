// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server"

const API_BASE = process.env.API_BASE ?? "http://localhost:8082" // Spring Boot

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { question: string }
    const res = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: "SPRING_ERROR", detail: text }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: "GATEWAY_ERROR", detail: String(e?.message ?? e) }, { status: 500 })
  }
}
