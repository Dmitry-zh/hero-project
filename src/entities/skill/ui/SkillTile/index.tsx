import { SkillModel } from 'src/shared/model/skill'

import * as S from './styles'

type Props = {
  skill: SkillModel
  onApplied?: (skill: SkillModel) => void
}

function SkillTile({ skill, onApplied }: Props) {
  return (
    <S.Container onClick={() => onApplied?.(skill)}>
      <S.Icon src={skill.iconSrc} alt={skill.id} />
    </S.Container>
  )
}

export { SkillTile }
