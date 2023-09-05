import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: 'Alphabet',
    link: '/docs/basics/alphabet',
    Svg: require('@site/static/img/alphabet.svg').default,
    description: (
      <>
        Learn about the build blocks of the dialect.
      </>
    ),
  },
  {
    title: 'Numbers',
    link: '/docs/basics/numbers',
    Svg: require('@site/static/img/numbers.svg').default,
    description: (
        <>
            Learn to pronounce the numbers.
        </>
    ),
  }
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
          {link &&
              <Link
                  className="button button--secondary button--lg"
                  to={link}>
                  <Translate id='learn.more'>
                      Learn more
                  </Translate>
              </Link>
          }
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
