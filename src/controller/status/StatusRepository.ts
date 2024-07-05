import { StatusModel } from '@/model/Status'
import { PrismaClient } from '@prisma/client'

export default class StatusRepository {
  private static db: PrismaClient = new PrismaClient()

  static async save(record: StatusModel): Promise<StatusModel> {
    return await this.db.status.upsert({
      where: { id: record.id },
      update: record,
      create: record
    })
  }

  static async create(record: StatusModel): Promise<StatusModel> {
    return await this.db.status.create({
      data: record
    })
  }

  static async update(record: StatusModel): Promise<StatusModel> {
    return await this.db.status.update({
      where: { id: record.id },
      data: record
    })
  }

  static async delete(id: string): Promise<void> {
    await this.db.status.delete({ where: { id } })
  }

  static async getAll(): Promise<StatusModel[]> {
    return await this.db.status.findMany({
      orderBy: [{ nome: 'asc' }]
    })
  }

  static async getById(id: string): Promise<StatusModel> {
    const usr = await this.db.status.findUnique({ where: { id } })
    return usr as StatusModel
  }
}
