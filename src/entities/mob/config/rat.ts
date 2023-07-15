import { MobModel } from '../model'

const ratMob = (): MobModel =>
  new MobModel(
    {
      hitPoints: 35,
      mana: 0,
      physicalAttack: 5,
      magicalAttack: 0,
      physicalDefence: 3,
      magicalDefence: 1,
      intelligence: 0,
      strength: 0,
      vitality: 0,
      agility: 0,
      mentality: 0,
      blockChance: 5,
      avoidChance: 5,
      criticalPhysicalAttackChance: 0,
    },
    'rat',
  )

export { ratMob }
