import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
	addons: [
		'@storybook/addon-ondevice-controls',
		'@storybook/addon-ondevice-actions',
	],
	stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
};

export default main;
