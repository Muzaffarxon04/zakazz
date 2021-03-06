import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Management from "../src/Components/management/management";
;


export default function Managements() {
	return (
		<>
			<Head>
				<title>Management</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
		<Management/>
			</Layout>
		</>
	);

}
