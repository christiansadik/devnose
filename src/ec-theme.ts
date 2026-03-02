import nightOwl from '@shikijs/themes/night-owl';
import type { ThemeRegistration } from 'shiki';

// NOTE: This theme is based on Night Owl but intentionally keeps the "Spectre Dark"
// name for user-facing consistency and backward compatibility.
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
