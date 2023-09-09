import { createDomain } from 'effector'
import { useUnit } from 'effector-react'

import { INITIAL_PLAYER_CHARACTERISTICS } from '../config'

import { Player } from './player'

const domain = createDomain('shared.engine.player')

const $player = domain.createStore(
  new Player(INITIAL_PLAYER_CHARACTERISTICS, 'TODO'),
)
const usePlayer = () => useUnit($player)

export const playerModel = {
  $player,
  usePlayer,
}
