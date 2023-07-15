import { FighterTile } from '~/features/battle'
import { PlayerModel } from '~/entities/player'
import { MobModel } from '~/entities/mob'

import { useHunting } from '../../model'

interface Props {
  player: PlayerModel
  mob: MobModel
}

function Hunting({ player, mob }: Props) {
  const { onPlayerAppliedSkill, turn } = useHunting({ player, mob })

  return (
    <div>
      {turn}
      <FighterTile fighter={player} onSkillApplied={onPlayerAppliedSkill} />
      <FighterTile fighter={mob} />
    </div>
  )
}

export { Hunting }
