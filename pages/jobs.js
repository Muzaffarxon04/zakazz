import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Jobs from "../src/Components/jobs/jobs";
;


export default function Aboutf() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
		<Jobs/>
			</Layout>
		</>
	);

}
