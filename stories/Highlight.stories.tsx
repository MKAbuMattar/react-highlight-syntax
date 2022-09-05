import React from 'react';
import { ComponentMeta } from '@storybook/react';

import ReactHighlightSyntax from '../src';

export default {
  title: 'React Highlight Syntax',
  component: ReactHighlightSyntax,
} as ComponentMeta<typeof ReactHighlightSyntax>;

export const ReactHighlight = (args) => (
  <ReactHighlightSyntax {...args}>{args.children}</ReactHighlightSyntax>
);

const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;

ReactHighlight.args = {
  tag: 'div',
  children: code,
  language: 'HTML',
  theme: 'A11yDark',
};
