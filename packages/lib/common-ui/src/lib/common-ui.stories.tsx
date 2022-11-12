// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import CommonUi from './common-ui';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: CommonUi,
} as ComponentMeta<typeof CommonUi>;