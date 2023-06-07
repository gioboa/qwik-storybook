import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { Button, type Props } from './button';

const meta: Meta<Props> = {
	component: Button,
};

type Story = StoryObj<Props>;

export default meta;

export const Small: Story = {
	args: { size: 'sm' },
	render: (props) => <Button {...props}>Some button</Button>,
};

export const Medium: Story = {
	args: { size: 'md' },
	render: (props) => <Button {...props}>Some button</Button>,
};

export const Large: Story = {
	args: { size: 'lg' },
	render: (props) => <Button {...props}>Some button</Button>,
};
