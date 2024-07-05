import { FinancaModel } from '@/model/Financa'
import { PrismaClient } from '@prisma/client'

export default class FinancaRepository {
  private static db: PrismaClient = new PrismaClient()

  static async save(financa: FinancaModel): Promise<FinancaModel> {
    return await this.db.financa.upsert({
      where: { id: financa.id },
      update: financa,
      create: financa
    })
  }

  static async create(record: FinancaModel): Promise<FinancaModel> {
    console.log('REGISTRO INSERT:', record)
    return await this.db.financa.create({
      data: record
    })
  }

  static async update(record: FinancaModel): Promise<FinancaModel> {
    console.log('REGISTRO UPDATE:', record)
    return await this.db.financa.update({
      where: { id: record.id },
      data: record
    })
  }

  static async getAll(): Promise<FinancaModel[]> {
    return await this.db.financa.findMany({
      // include: {
      //   status: {
      //     select: {
      //       nome: true
      //     }
      //   }
      // }
    })
  }

  static async getById(id: string): Promise<FinancaModel> {
    const usr = await this.db.financa.findUnique({ where: { id } })
    return usr as FinancaModel
  }

  static async delete(id: string): Promise<void> {
    await this.db.financa.delete({ where: { id } })
  }
}
