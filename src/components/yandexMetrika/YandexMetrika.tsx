'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';
const YM_COUNTER_ID = 93665664;
export const YandexMetrika = () => {
	const pathname = usePathname();
	useEffect(() => {
		if (pathname) {
			ym('hit', pathname);
		}
	}, [pathname]);
	return (
		<YMInitializer
			accounts={[YM_COUNTER_ID]}
			options={{
				webvisor: true,
				defer: true,
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
			}}
			version='2'
		/>
	);
};
