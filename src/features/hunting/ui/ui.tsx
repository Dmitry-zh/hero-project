import { Renderer } from '~/shared/model'

import { Props } from '../model'

import * as S from './styles'

// выбирает скилл
// использует скилл
// реагирует на атаки
// реагирует на получение награды

export function Hunting({ mob, player }: Props) {
  console.log(Renderer)
  // + player HP | mob MP
  // + player MP | mob MP
  // + arena background
  // player Tile | Mob Tile
  // skills and consumes
  return (
    <S.BattlegroundContainer src='locations/cursed-forest.png'>
      <S.PointBarsContainer>
        <Renderer.PointsBar
          current={player.currentHitPoints}
          max={player.characteristics.hitPoints}
          color='red'
        />
        <Renderer.PointsBar
          current={mob.currentHitPoints}
          max={mob.characteristics.hitPoints}
          color='red'
        />
      </S.PointBarsContainer>

      <S.PointBarsContainer>
        <Renderer.PointsBar
          current={player.currentMana}
          max={player.characteristics.mana}
          color='blue'
        />
        <Renderer.PointsBar
          current={mob.currentMana}
          max={mob.characteristics.hitPoints}
          color='blue'
        />
      </S.PointBarsContainer>

      <S.SkillsContainer>
        {player.skills.map((skill) => (
          <Renderer.SkillTile key={skill.id} skill={skill} />
        ))}
      </S.SkillsContainer>
    </S.BattlegroundContainer>
  )
}
