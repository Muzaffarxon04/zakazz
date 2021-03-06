import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Auditreport from "../src/Components/Reports/Auditreport";
;


export default function Aboutf({Url}) {
	return (
		<>
			<Head>
				<title>Audit report</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
		<Auditreport Url={Url}/>
			</Layout>
		</>
	);

}
