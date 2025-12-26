import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Bắt đầu ngay 🚀
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/setup-env"
            style={{marginLeft: '10px'}}>
            Setup Môi trường ⚙️
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  const quickLinks = [
    {
      title: '📚 Tài liệu chính',
      description: 'Hướng dẫn chi tiết về các tính năng và quy trình',
      to: '/docs/intro',
      icon: '📚',
    },
    {
      title: '⚙️ Setup Môi trường',
      description: 'Hướng dẫn cài đặt môi trường phát triển cho Newbie',
      to: '/docs/setup-env',
      icon: '⚙️',
    },
    {
      title: '📊 Ví dụ Mermaid',
      description: 'Xem các ví dụ về sơ đồ kiến trúc và flowchart',
      to: '/docs/mermaid-examples',
      icon: '📊',
    },
    {
      title: '🔍 Tìm kiếm',
      description: 'Tìm kiếm nhanh trong toàn bộ tài liệu',
      to: '#',
      onClick: (e) => {
        e.preventDefault();
        document.querySelector('button.DocSearch-Button')?.click();
      },
      icon: '🔍',
    },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center margin-bottom--lg">
              Truy cập nhanh
            </Heading>
          </div>
        </div>
        <div className="row">
          {quickLinks.map((link, idx) => (
            <div key={idx} className="col col--3 margin-bottom--lg">
              <div className={clsx('card', styles.quickLinkCard)}>
                <div className="card__header">
                  <Heading as="h3" className="text--center">
                    {link.icon} {link.title}
                  </Heading>
                </div>
                <div className="card__body">
                  <p className="text--center">{link.description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--block button--primary"
                    to={link.to}
                    onClick={link.onClick}>
                    Xem thêm →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Tài liệu nội bộ Osstech Team - Hướng dẫn, quy trình và best practices">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
