import IFinanceRepository from "@/api/domain/ports/repository-interfaces/IFinanceRepository";
import { PrismaClient } from "@prisma/client";

export default class FinancePrismaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}