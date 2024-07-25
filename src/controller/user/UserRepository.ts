import { prismaDB } from '@/lib/prisma'
import { UserModel } from '@/model/User'
// import { PrismaClient } from '@prisma/client'

export default class UserRepository {
  // private static db: PrismaClient = new PrismaClient()
  private static db = prismaDB

  static async save(record: UserModel): Promise<UserModel> {
    return await this.db.usuario.upsert({
      where: { id: record.id },
      update: record,
      create: record
    })
  }

  static async create(record: UserModel): Promise<UserModel> {
    return await this.db.usuario.create({
      data: record
    })
  }

  static async update(record: UserModel): Promise<UserModel> {
    return await this.db.usuario.update({
      where: { id: record.id },
      data: record
    })
  }

  static async delete(id: string): Promise<void> {
    await this.db.usuario.delete({ where: { id } })
  }

  static async getAll(): Promise<UserModel[]> {
    return await this.db.usuario.findMany({
      orderBy: [{ nome_completo: 'asc' }]
    })
  }

  static async getById(id: string): Promise<UserModel> {
    const usr = await this.db.usuario.findUnique({ where: { id } })
    return usr as UserModel
  }

  static async getByEmail(email: string): Promise<UserModel> {
    const usr = await this.db.usuario.findUnique({ where: { email } })
    return usr as UserModel
  }

  static async getFirst(): Promise<UserModel> {
    const usr = await this.db.usuario.findFirst()
    return usr as UserModel
  }
}
