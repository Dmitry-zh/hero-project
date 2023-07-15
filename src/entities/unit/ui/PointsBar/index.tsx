import React, { useMemo } from 'react';

import { CharacteristicValue } from '~/shared/characteristics';

import * as S from './styles';

interface Props {
  current: CharacteristicValue;
  max: CharacteristicValue;
  color: CSSStyleDeclaration['backgroundColor'];
}

function PointsBar({ current, max, color }: Props) {
  const percent = useMemo(() => (current / max) * 100, [current, max]);

  return (
    <S.Container>
      <S.CaptionWithOverlay $color={color} $percentage={percent}>
        {current} / {max}
      </S.CaptionWithOverlay>
    </S.Container>
  );
}

export { PointsBar };
