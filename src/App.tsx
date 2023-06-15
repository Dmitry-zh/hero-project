import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createNewCharacter } from '@/features/character';
import { ratMob } from '@/constants/mob';
import { SkillModel } from '@/types/skill/skill';
import Character from '@/entities/character';

const App: React.FC = () => {
	const [character] = useState<Character>(createNewCharacter());
	const [rat] = useState(ratMob());
	const [i, setI] = useState(1);

	const useSkill = useCallback(
		(skill: SkillModel) => {
			character.useSkill(skill, rat);
			setI(Math.random());
		},
		[character, rat, i]
	);

	return (
		<>
			<div>
				<div className="test" key={i}>
					<div className="player">player hp: {character.currentHitPoints}</div>
					<div>vs</div>
					<div className="mob">rat hp: {rat.currentHitPoints}</div>
				</div>
				<div>
					<span>скиллы</span>
					{character.skills.map((skill) => {
						return (
							<div key={skill.id} onClick={() => useSkill(skill)}>
								{skill.id}
							</div>
						);
					})}
				</div>
				<div>{JSON.stringify(character)}</div>
			</div>
		</>
	);
};

export default App;
