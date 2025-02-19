// @ts-nocheck

import figma from '@figma/code-connect';

import { Icon } from '../src';

figma.connect('https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=6-141307', {
	example: () => <Icon name="add" />,
});
