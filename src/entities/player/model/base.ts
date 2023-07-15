import { UnitModel } from '~/entities/unit'
import { CharacteristicsModel } from 'src/shared/model/characteristics'

class PlayerModel extends UnitModel {
  constructor(characteristics: CharacteristicsModel, _id: string) {
    super(characteristics, _id)
  }
}

export { PlayerModel }
