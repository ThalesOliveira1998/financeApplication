import { Props } from '@/_api-REMOVER/domain/models/finance/Props'
import Entity from '../Entity'

export default class Finance extends Entity {
  readonly description: string
  readonly value: number
  readonly date: Date
  readonly userId: string
  readonly statusId: string
  readonly typeId: string

  constructor({
    id,
    description,
    value,
    date,
    userId,
    statusId,
    typeId
  }: Props) {
    super(id!)

    this.description = description
    this.value = value
    this.date = date
    this.userId = userId
    this.statusId = statusId
    this.typeId = typeId
  }
}
