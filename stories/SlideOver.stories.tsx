import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SlideOverProps, SlideOver } from '../src';

const meta: Meta = {
  title: 'SlideOver',
  component: SlideOver,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SlideOverProps> = (args) => (
  <SlideOver {...args}>Test content</SlideOver>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook slide',
  isOpen: true,
};
