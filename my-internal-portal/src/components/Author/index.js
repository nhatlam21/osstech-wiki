import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Author({name, email, avatar, role, lastUpdated}) {
  return (
    <div className={clsx('margin-bottom--lg', styles.authorContainer)}>
      <div className={clsx('card', styles.authorCard)}>
        <div className="card__body">
          <div className={styles.authorContent}>
            {avatar && (
              <div className={styles.avatarContainer}>
                <img 
                  src={avatar} 
                  alt={name}
                  className={styles.avatar}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <div className={styles.authorInfo}>
              <div className={styles.authorHeader}>
                <span className={styles.authorLabel}>📝 Tác giả:</span>
                <strong className={styles.authorName}>{name}</strong>
                {role && <span className={styles.authorRole}>({role})</span>}
              </div>
              {email && (
                <div className={styles.authorContact}>
                  <a href={`mailto:${email}`} className={styles.emailLink}>
                    📧 {email}
                  </a>
                </div>
              )}
              {lastUpdated && (
                <div className={styles.lastUpdated}>
                  <small>🕒 Cập nhật lần cuối: {lastUpdated}</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

