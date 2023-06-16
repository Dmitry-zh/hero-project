import React, { useMemo } from 'react';
import { CharacteristicValue } from '@/types/characteristics';

import * as S from './styles';

interface Props {
	current: CharacteristicValue;
	max: CharacteristicValue;
	color: CSSStyleDeclaration['backgroundColor'];
}

const PointsBar: React.FC<Props> = ({ current, max, color }) => {
	const percent = useMemo(() => (current / max) * 100, [current, max]);

	return (
		<S.Container>
			<S.CaptionWithOverlay $color={color} $percentage={percent}>
				{current} / {max}
			</S.CaptionWithOverlay>
		</S.Container>
	);
};

export default PointsBar;
