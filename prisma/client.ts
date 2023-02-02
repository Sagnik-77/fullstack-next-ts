import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

interface CustomNodeJS extends NodeJS.Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJS;

const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = client;

export default client;
