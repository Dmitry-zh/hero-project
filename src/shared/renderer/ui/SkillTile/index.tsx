import { Engine } from '~/shared/model'

import * as S from './styles'

type Props = {
  skill: Engine.SkillModel
  onApplied?: (skill: Engine.SkillModel) => void
}

function SkillTile({ skill, onApplied }: Props) {
  return (
    <S.Container onClick={() => onApplied?.(skill)}>
      <S.Icon src={skill.iconSrc} alt={skill.id} />
    </S.Container>
  )
}

export { SkillTile }
