import styles from './button.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);
type ButtonProps = {
	value: string;
	type?: 'primary' | 'secondary' | 'tertiary';
	bold?: boolean;
	semibold?: boolean;
	extraBold?: boolean;
	large?: boolean;
	big?: boolean;
	href?: string;
	onClick?: (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
	) => void;
};

export const Button = ({
	value,
	type = 'primary',
	bold = false,
	semibold = false,
	href = '',
	large = false,
	big = false,
	extraBold = false,
	onClick,
}: ButtonProps) => {
	const resultCx = cx('button', `button_${type}`, {
		button_bold: bold,
		button_semibold: semibold,
		button_big: big,
		button_extraBold: extraBold,
		button_large: large,
	});
	return href ? (
		<Link href={href} className={resultCx} onClick={onClick}>
			{value}
		</Link>
	) : (
		<button className={resultCx} onClick={onClick}>
			{value}
		</button>
	);
};
