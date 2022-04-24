import Head from 'next/head';

import Layout from "../../src/Components/layout/layout";
import Samarkand from "../../src/Components/Samarkand/Samarkand";

;


export default function Stricture() {
	return (
		<>
			<Head>
				<title>Stricture</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>			        
			<Samarkand/>
			</Layout>
		</>
	);

	
}
