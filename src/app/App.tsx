import React from 'react'

import { Hunting } from '~/widgets/hunting'
import { PlayerModel } from '~/entities/player'
import { ratMob } from '~/entities/mob'

const App: React.FC = () => {
  return (
    <div>
      <Hunting
        player={
          new PlayerModel(
            {
              hitPoints: 1000,
              mana: 100,
              physicalAttack: 5,
              magicalAttack: 12,
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
            'player',
          )
        }
        mob={ratMob()}
      />
    </div>
  )
}

export default App
