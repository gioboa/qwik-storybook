import type { PropFunction } from '@builder.io/qwik';
import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import styles from './button.scss?inline';

export const config = {
	sizes: {
		sm: 'small',
		md: 'medium',
		lg: 'large',
	},
};

export type ButtonSizes = 'sm' | 'md' | 'lg';

export type Props = {
	type: 'button' | 'reset' | 'submit';
	size: ButtonSizes;
	onClick$: PropFunction<() => void>;
	class: string;
	disabled: boolean;
};

export const Button = component$<Props>(
	({ type = 'button', onClick$, disabled, size = 'md' }) => {
		useStyles$(styles);

		return (
			<button
				type={type}
				onClick$={onClick$}
				disabled={disabled}
				class={`button ${config.sizes[size]}`}
			>
				<Slot />
			</button>
		);
	}
);
