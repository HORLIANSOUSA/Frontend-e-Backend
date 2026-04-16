import prisma from '../lib/prisma.js'

export async function criarPlano() {
  const plano = await prisma.plan.create({
    data: {
      name: "Premium",
      price: 29.90,
      maxLinks: 1000,
      maxClicks: 10000,
    },
  });
  console.log(plano);
  return plano;
}

export async function listarPlanos() {
  const planos = await prisma.plan.findMany();
  console.log(planos);
  return planos;
}

export async function criarUsuario() {
  const usuario = await prisma.user.create({
    data: {
      email: "joao@exemplo.com",
      passwordHash: "hash_da_senha_aqui",
      planId: 1,
    },
  });
  console.log(usuario);
  return usuario;
}

export async function buscarUsuarioComPlano(email) {
  const usuario = await prisma.user.findUnique({
    where: { email },
    include: { plan: true },
  });
  console.log(usuario);
  return usuario;
}

export async function atualizarPlanoUsuario(userId, novoPlanId) {
  const usuario = await prisma.user.update({
    where: { id: userId },
    data: { planId: novoPlanId },
  });
  console.log(usuario);
  return usuario;
}

export async function criarRelatorio(userId, reportType, data) {
  const relatorio = await prisma.report.create({
    data: {
      userId,
      reportType,
      data,
    },
  });
  console.log(relatorio);
  return relatorio;
}

export async function listarRelatorios(userId) {
  const relatorios = await prisma.report.findMany({
    where: { userId },
    orderBy: { generatedAt: "desc" },
  });
  console.log(relatorios);
  return relatorios;
}