import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Financialreports from "../src/Components/Reports/Financialreports";
;


export default function Aboutf() {
	return (
		<>
			<Head>
				<title>Financial report</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
		<Financialreports/>
			</Layout>
		</>
	);

}
