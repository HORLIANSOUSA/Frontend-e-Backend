import {
  criarPlano,
  listarPlanos,
  criarUsuario,
  buscarUsuarioComPlano,
  atualizarPlanoUsuario,
  criarRelatorio,
  listarRelatorios
} from './services/operations.js';

async function main() {
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });