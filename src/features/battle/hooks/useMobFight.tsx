import Character from '@/entities/character';
import { Mob } from '@/entities/mob';
import { useCallback, useEffect, useMemo } from 'react';
import { SkillModel } from '@/types/skill/skill';

import { useFightTurn } from './useFightTurn';

type UseMobFightHook = (
	char: Character,
	mob: Mob,
	listeners: {
		onFightWin: CallableFunction;
		onFightLoose: CallableFunction;
	}
) => { useCharacterSkill: (skill: SkillModel) => void };

const useMobFight: UseMobFightHook = (
	character: Character,
	mob: Mob,
	{ onFightWin, onFightLoose }
) => {
	const { turn, incrementTurn } = useFightTurn();

	const isCharacterDead = useMemo(
		() => character.currentHitPoints <= 0,
		[character, turn]
	);
	const isMobDead = useMemo(() => mob.currentHitPoints <= 0, [mob, turn]);

	const mobHitBack = useCallback(() => {
		// TODO: здесь будет паттерн поведения
		mob.useSkill(mob.skills[0], character);
	}, [character, mob]);

	const useCharacterSkill = useCallback(
		(skill: SkillModel) => {
			character.useSkill(skill, mob);
			if (!isMobDead) {
				mobHitBack();
			}
			incrementTurn();
		},
		[character, mob, mobHitBack]
	);

	useEffect(() => {
		if (isCharacterDead) {
			onFightLoose();
		}
	}, [isCharacterDead]);

	useEffect(() => {
		if (isMobDead) {
			onFightWin();
		}
	}, [isMobDead]);

	return {
		useCharacterSkill,
	};
};

export { useMobFight };
