import { getArticleByPath, getArticles } from '@/dal/articles';
import { Article } from './Article';

export async function generateStaticParams() {
	const { data } = await getArticles();

	return data.map(({ path }) => ({ path }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ path: string }>;
}) {
	const { path } = await params;
	const { data } = await getArticleByPath(path);
	return {
		title: data.title,
		description: data?.metaDescription || '',
		keywords: data?.metaKeywords || '',
		openGraph: {
			title: data.title,
		},
	};
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ path: string }>;
}) {
	const { path } = await params;
	const { data } = await getArticleByPath(path);
	return <Article article={data} />;
}
