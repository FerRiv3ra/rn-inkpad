import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description:
      'Inkpad was developed with the idea of being easy to use, offering a series of ready-to-use components to ensure a fluid experience for users in designing and creating.',
  },
  {
    title: 'Multi platform',
    Svg: require('@site/static/img/multi_platform.svg').default,
    description:
      'Implement a standard design across all platforms to ensure a uniform experience for users, regardless of the platform you are developing for.',
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/customizable.svg').default,
    description:
      'All components are fully customizable, allowing developers to easily adapt them to the specific needs of their projects.',
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {/* <Heading as="h3">{title}</Heading> */}
        <h3>
          <Translate description={title}>{title}</Translate>
        </h3>
        <p>
          <Translate>{description}</Translate>
        </p>
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
