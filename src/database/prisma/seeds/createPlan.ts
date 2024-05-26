import { Prisma, PrismaClient } from "@prisma/client";

export const createPlan = async (db: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>) => {
    /*const passLogin = process.env.PASS_LOGIN ? process.env.PASS_LOGIN : '1234';
    
    if (!passLogin) {
        console.error("A variável de ambiente PASS_LOGIN não está definida.");
        process.exit(1);
    }
    
    try {
        let plan = await db.plan.findFirst({ where: { planName: "FREE" } });
    
        if (!plan) {
            plan = await db.plan.create({
                data: {
                    planName: "FREE",
                    value: 0,
                    default: true
    
                },
            });
            console.log(`Plano : ${plan.planName} criado`);
        }
    } catch (error) {
        throw error
    }*/
}