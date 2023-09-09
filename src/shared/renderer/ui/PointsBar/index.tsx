import React, { useMemo } from 'react'

import { Engine } from '~/shared/model'

import * as S from './styles'

interface Props {
  current: Engine.CharacteristicValue
  max: Engine.CharacteristicValue
  color: CSSStyleDeclaration['backgroundColor']
}

function PointsBar({ current, max, color }: Props) {
  const percent = useMemo(() => (current / max) * 100, [current, max])

  return (
    <S.Container>
      <S.CaptionWithOverlay $color={color} $percentage={percent}>
        {current} / {max}
      </S.CaptionWithOverlay>
    </S.Container>
  )
}

export { PointsBar }
