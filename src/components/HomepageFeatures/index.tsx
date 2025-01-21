import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rust & Security',
    Svg: require('@site/static/img/RurstSecurity.svg').default,
    description: (
      <>
       Welcome to the Nullnet blog! If you're interested in building secure software and exploring what Rust can do, you're in the right place. Here, we’ll share how we’re designing and building security-focused applications, with practical tips on architecture and Rust programming along the way. Whether you're just getting started or looking to sharpen your skills, we’ve got something for you. Let’s dive in and build better, safer software together!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--left">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
