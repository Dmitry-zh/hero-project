import { UnitModel } from '../../unit'
import { CharacteristicsModel } from '../../characteristics'

class Player extends UnitModel {
  constructor(characteristics: CharacteristicsModel, _id: string) {
    super(characteristics, _id)
  }
}

export { Player }
