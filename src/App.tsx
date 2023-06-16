import React, { useState } from 'react';
import { createNewCharacter } from '@/features/character';
import { ratMob } from '@/constants/mob';
import { useMobFight } from '@/features/battle/hooks';
import PointsBar from '@/components/interface/battle/bars/PointsBar';

const App: React.FC = () => {
	const [character] = useState(createNewCharacter());
	const [mob] = useState(ratMob());
	const onWin = () => {
		alert('win');
	};

	const onLoose = () => {
		alert('loose');
	};

	const { useCharacterSkill } = useMobFight(character, mob, {
		onFightWin: onWin,
		onFightLoose: onLoose,
	});

	return (
		<div>
			<div>
				<div className="test">
					<PointsBar
						current={character.currentHitPoints}
						max={character.characteristics.hitPoints}
						color="red"
					/>
					<div className="player">player hp: {character.currentHitPoints}</div>
					<div>vs</div>
					<div className="mob">rat hp: {mob.currentHitPoints}</div>
				</div>
				<div>
					<span>скиллы</span>
					{character.skills.map((skill) => {
						return (
							<div key={skill.id} onClick={() => useCharacterSkill(skill)}>
								{skill.id}
							</div>
						);
					})}
				</div>
				<div>d</div>
			</div>
		</div>
	);
};

export default App;
