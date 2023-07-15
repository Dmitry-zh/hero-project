import { CharacteristicsModel } from 'src/shared/model/characteristics'

const INITIAL_PLAYER_CHARACTERISTICS: CharacteristicsModel = {
  // base
  hitPoints: 100,
  mana: 20,
  physicalAttack: 5,
  magicalAttack: 5,
  physicalDefence: 5,
  magicalDefence: 0,

  // characteristics
  intelligence: 0,
  strength: 0,
  vitality: 0,
  agility: 0,
  mentality: 0,

  // possibilities
  blockChance: 0,
  avoidChance: 0,
  criticalPhysicalAttackChance: 0,
}

export { INITIAL_PLAYER_CHARACTERISTICS }
