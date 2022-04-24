import Head from 'next/head';

import Layout from "../src/Components/layout/layout";
import Service from "../src/Components/Service/service";

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
			<Service/>
			</Layout>
		</>
	);

	
}
