import "dotenv/config";
import pg from "pg";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaPg(
  new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  })
);

export const prisma = new PrismaClient({ adapter });

export default prisma;