import { PrismaClient } from "@prisma/client";

// Reuse client across hot reloads
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL?.includes("sslmode=")
          ? process.env.DATABASE_URL
          : process.env.DATABASE_URL + "?sslmode=require",
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;