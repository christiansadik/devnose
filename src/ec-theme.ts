import nightOwl from '@shikijs/themes/night-owl';
import type { ThemeRegistration } from 'shiki';

const spectreDark: ThemeRegistration = {
	...nightOwl,
	name: 'Spectre Dark',
	colors: {
		...nightOwl.colors,
		'activityBar.background': '#01111d',
		'editor.background': '#011627',
		'statusBar.background': '#01111d',
		'statusBarItem.remoteBackground': '#01111d',
		'tab.activeBackground': '#01111d',
		'titleBar.activeBackground': '#01111d',
		'editorGroupHeader.tabsBackground': '#00090f',
		'panel.background': '#011627',
	},
};

export { spectreDark };
