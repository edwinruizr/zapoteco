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
          <div className={clsx('col col--4', 'card-demo', 'margin-top--md')}>
              <div className="card item shadow--tl">
                  <div className="card__image text--center">
                          <Svg className={styles.featureSvg} role="img" />
                  </div>
                  <div className="card__body text--center padding-horiz--md">
                      <h4>{title}</h4>
                      <small>{description}</small>
                  </div>
                  {link &&
                      <div className="card__footer">
                      <Link
                          className="button button--secondary button--block"
                          to={link}>
                          <Translate id='learn.more'>
                              Learn more
                          </Translate>
                      </Link>
                      </div>
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
