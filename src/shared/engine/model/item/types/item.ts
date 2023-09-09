import { Identifier } from '~/shared/lib/types'

import { CharacteristicsModel } from '../../characteristics'

export type ItemModel = {
  id: Identifier
  characteristics: CharacteristicsModel
  price: number
  stackable: boolean
}
