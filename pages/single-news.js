import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Sidebar from "../src/Components/news-sidebar/news-sidebar";
;


export default function SingleNews() {
	return (
		<>
			<Head>
				<title>News</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
			<Sidebar/>
			</Layout>
		</>
	);

}
