import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-empty': [0],
		'type-empty': [0],
	},
};

export default Configuration;
