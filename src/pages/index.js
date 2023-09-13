import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.sfc, styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate id="hero.tagline">
              San Francisco Cajonos variation
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Learn ${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
        <div className="container margin-top--md">
        <Translate id="main.page.intro" description="intro on main page">Zapoteco, an ancient Mesoamerican language, spoken by the indigenous Zapotec communities primarily in Oaxaca,
            carries within its phonetics and syntax the echoes of millennia of human existence. San Francisco Cajonos,
            Ljxill in Zapoteco, is one of the village community where Zapoteco is spoken, with it's own variant. It is a
            vibrant and resilient culture famous for it's gastronomy, mezcal, dancing, and music, among other things.
            Learning this dialect variant can play a pivotal role in promoting cultural preservation and revitalization,
            creating a commitment to preserving the beautiful mosaic of human heritage.</Translate>
        </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
