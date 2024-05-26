import { Prisma, PrismaClient } from "@prisma/client";

interface TrxPrisma extends Omit<PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"> { }

export default TrxPrisma