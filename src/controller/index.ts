import FinancaDelete from './financa/FinancaDelete'
import FinancaGetAll from './financa/FinanceGetAll'
import FinancaSave from './financa/FinanceSave'
import StatusDelete from './status/StatusDelete'
import StatusGetAll from './status/StatusGetAll'
import StatusSave from './status/StatusSave'
import UserGetFirst from './user/UserGetFirst'
import TipoDelete from './tipo/TipoDelete'
import TipoGetAll from './tipo/TipoGetAll'
import TipoSave from './tipo/TipoSave'
import UserSave from './user/UserSave'
import UserGetByEmail from './user/UserGetByEmail'

export default class ControllerDB {
  static readonly financa = {
    save: FinancaSave,
    getAll: FinancaGetAll,
    delete: FinancaDelete
  }

  static readonly status = {
    save: StatusSave,
    getAll: StatusGetAll,
    delete: StatusDelete
  }

  static readonly tipo = {
    save: TipoSave,
    getAll: TipoGetAll,
    delete: TipoDelete
  }

  static readonly user = {
    getFirst: UserGetFirst,
    getByEmail: UserGetByEmail,
    save: UserSave
  }
}
