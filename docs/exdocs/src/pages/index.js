import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';


const Title = () => {
  return(
    <header className=''>
      <div className="container my-5">
        <h1 className="f-40">
          Build theme based <br />
          responsive sites <br />
          with Swarup
        </h1>
        <p className="w-50 f-24">
          The UI library for creating theme-based <br /> fully responsive and text-friendly sites quickly.
        </p>
        <div className='my-5'>
          <Link className='sw-btn sw-btn-lg' to={useBaseUrl('docs/')}>
            Get Started
          </Link>
          <Link className='sw-btn sw-btn-outline sw-btn-lg mx-3' to={useBaseUrl('docs/')}>
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(){
  return (
    <Layout title='Welcom to Swarup.' description="A theme-base fully responsive and text-friendly UI library.">
      <Title />
    </Layout>
  );
}
