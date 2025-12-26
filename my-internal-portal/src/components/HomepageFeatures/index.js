import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📚 Tài liệu đầy đủ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tài liệu được tổ chức rõ ràng, dễ tìm kiếm với đầy đủ hướng dẫn từ cơ bản đến nâng cao.
        Phù hợp cho cả người mới và người có kinh nghiệm.
      </>
    ),
  },
  {
    title: '📊 Sơ đồ trực quan',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sử dụng Mermaid để vẽ sơ đồ kiến trúc, flowchart, sequence diagram ngay trong tài liệu.
        Giúp hiểu rõ hơn về hệ thống và quy trình.
      </>
    ),
  },
  {
    title: '🔍 Tìm kiếm thông minh',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tích hợp Algolia DocSearch để tìm kiếm nhanh chóng và chính xác trong toàn bộ tài liệu.
        Tìm thấy thông tin bạn cần chỉ trong vài giây.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
