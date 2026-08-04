import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || message.length < 10) {
    return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "[contact] RESEND_API_KEY ou CONTACT_TO_EMAIL não configurados. Veja o README para as instruções de setup."
    );
    return NextResponse.json(
      { error: "Envio de e-mail ainda não configurado no servidor." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Novo contato pelo portfólio — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Falha ao enviar o e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Erro inesperado." }, { status: 500 });
  }
}
