import { TiposModel } from '@/model/Tipos'
import { PrismaClient } from '@prisma/client'

export default class TipoRepository {
  private static db: PrismaClient = new PrismaClient()

  static async save(record: TiposModel): Promise<TiposModel> {
    return await this.db.tipo_Financa.upsert({
      where: { id: record.id },
      update: record,
      create: record
    })
  }

  static async create(record: TiposModel): Promise<TiposModel> {
    return await this.db.tipo_Financa.create({
      data: record
    })
  }

  static async update(record: TiposModel): Promise<TiposModel> {
    return await this.db.tipo_Financa.update({
      where: { id: record.id },
      data: record
    })
  }

  static async delete(id: string): Promise<void> {
    await this.db.tipo_Financa.delete({ where: { id } })
  }

  static async getAll(): Promise<TiposModel[]> {
    return await this.db.tipo_Financa.findMany({
      orderBy: [{ nome: 'asc' }]
    })
  }

  static async getById(id: string): Promise<TiposModel> {
    const usr = await this.db.tipo_Financa.findUnique({ where: { id } })
    return usr as TiposModel
  }
}
