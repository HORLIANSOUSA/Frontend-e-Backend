import prisma from "../lib/prisma.js";

export function getAll() {
  return prisma.medicine.findMany();
}

export function getById(id) {
  return prisma.medicine.findUnique({
    where: { id },
  });
}

export function getByCode(code) {
  return prisma.medicine.findUnique({
    where: { code },
  });
}

export function search(termo) {
  return prisma.medicine.findMany({
    where: {
      name: {
        contains: termo,
        mode: "insensitive",
      },
    },
  });
}

export function mostSearched() {
  return prisma.medicine.findMany({
    include: {
      _count: {
        select: {
          searchTracks: true,
        },
      },
    },
    orderBy: {
      searchTracks: {
        _count: "desc",
      },
    },
    take: 10,
  });
}

export function create(data) {
  return prisma.medicine.create({
    data: {
      name: data.name,
      price: Number(data.price),
      code: data.code,
      ondeTem: data.ondeTem || null,
      riskLevel: Number(data.riskLevel),
    },
  });
}

export function update(id, data) {
  return prisma.medicine.update({
    where: { id },
    data,
  });
}

export function remove(id) {
  return prisma.medicine.delete({
    where: { id },
  });
}