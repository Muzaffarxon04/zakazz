import Head from 'next/head';

import Layout from "../../src/Components/layout/layout";
import Bostanlik from "../../src/Components/Bostonlik/Bostonlik";

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
			<Bostanlik/>
			</Layout>
		</>
	);

	
}
