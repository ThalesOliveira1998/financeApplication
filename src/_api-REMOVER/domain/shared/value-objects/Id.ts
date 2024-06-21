import UuidAdapter from '@/_api-REMOVER/infra/adapters/UuidAdapter'
const uuid = new UuidAdapter()

export default class Id {
  constructor(readonly value: string = uuid.generate()) {
    if (!uuid.validate(value)) throw new Error('Id inválido')
  }
}
