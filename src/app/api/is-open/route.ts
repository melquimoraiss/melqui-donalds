import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const hour = now.getHours();

  // Exemplo: aberto das 10h às 22h
  const isOpen = hour >= 10 && hour < 22;

  return NextResponse.json({ isOpen });
}
