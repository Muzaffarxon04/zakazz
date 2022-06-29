import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Legalstatus from "../src/Components/Youthpolicy/Youthpolicy";
;


export default function LegalStatus() {
	return (
		<>
			<Head>
				<title>Youth policy</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
		<Legalstatus/>
			</Layout>
		</>
	);

}
