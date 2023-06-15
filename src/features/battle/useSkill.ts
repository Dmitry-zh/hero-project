import { DamageValue, SkillModel } from '@/types/skill/skill';
import { CharacteristicsModel } from '@/types/characteristics';

const useSkill = (
	skill: SkillModel,
	characteristics: CharacteristicsModel
): DamageValue => {
	return skill.damageValue(characteristics);
};

export { useSkill };
