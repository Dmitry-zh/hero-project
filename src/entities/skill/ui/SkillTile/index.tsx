import { SkillModel } from 'src/shared/model/skill'

import * as S from './styles'

type Props = {
  skill: SkillModel
  onApplied?: (skill: SkillModel) => void
}

function SkillTile({ skill, onApplied }: Props) {
  return (
    <S.Container onClick={() => onApplied?.(skill)}>
      <div>{skill.id}</div>
    </S.Container>
  )
}

export { SkillTile }
