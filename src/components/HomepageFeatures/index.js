import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate id="Alphabet">Alphabet</Translate>,
    link: '/docs/basics/alphabet',
    Svg: require('@site/static/img/alphabet.svg').default,
    description: <Translate id="alphabet.description">Learn about the build blocks of the dialect.</Translate>
  },
  {
    title: <Translate id="Numbers">Numbers</Translate>,
    link: '/docs/basics/numbers',
    Svg: require('@site/static/img/numbers.svg').default,
    description: <Translate id="numbers.description">Learn to pronounce the numbers.</Translate>
  },
  {
    title: <Translate id="Flashcards">Flashcards</Translate>,
    link: '/docs/basics/flashcards',
    Svg: require('@site/static/img/cards.svg').default,
    description: <Translate id="flashcards.description">Test your knowledge</Translate>
  },
];

function Feature({Svg, title, description, link}) {
  return (
          <div className={clsx('col col--4', 'card-demo', 'margin-vert--sm')}>
              <Link to={link}>
              <div className="card item shadow--tl">
                  <div className="card__image text--center">
                          <Svg className={styles.featureSvg} role="img" />
                  </div>
                  <div className="card__body text--center padding-horiz--md">
                      <h2>{title}</h2>
                  </div>
                      <div className="card__footer text--center ">
                          <small>{description}</small>
                      </div>
              </div>
              </Link>
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
