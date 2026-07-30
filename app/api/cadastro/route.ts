import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { syncContactToActiveCampaign } from "@/lib/activecampaign";

const registrationSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo"),
  email: z.string().trim().email("Informe um e-mail válido"),
  telefone: z.string().trim().min(8, "Informe um telefone/WhatsApp válido"),
  empresa: z.string().trim().optional(),
  cargo: z.string().trim().optional(),
  segmento: z.string().trim().optional(),
  autorizo: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = registrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos" },
      { status: 400 }
    );
  }

  const { nome, email, telefone, empresa, cargo, segmento, autorizo } = parsed.data;

  const registration = await prisma.registration.create({
    data: { nome, email, telefone, empresa, cargo, segmento, autorizo: autorizo ?? false },
  });

  try {
    await syncContactToActiveCampaign({ nome, email, telefone });
    await prisma.registration.update({
      where: { id: registration.id },
      data: { syncedToAC: true },
    });
  } catch (err) {
    console.error("Falha ao sincronizar com o ActiveCampaign:", err);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
