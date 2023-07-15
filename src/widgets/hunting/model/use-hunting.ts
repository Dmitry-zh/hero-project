import { applySkill, useFightTurn } from '~/features/battle'
import { PlayerModel } from '~/entities/player'
import { MobModel } from '~/entities/mob'
import { SkillModel } from 'src/shared/model/skill'

interface Props {
  player: PlayerModel
  mob: MobModel
}

function useHunting({ player, mob }: Props) {
  const { turn, incrementTurn } = useFightTurn()
  const onPlayerAppliedSkill = (skill: SkillModel) => {
    const { damage } = applySkill(
      player.characteristics,
      mob.characteristics,
      skill,
    )
    mob.currentHitPoints -= damage
    incrementTurn()
  }

  return { onPlayerAppliedSkill, turn }
}

export { useHunting }
