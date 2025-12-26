import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Feedback({title = 'Tài liệu này có hữu ích không?'}) {
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (value) => {
    setFeedback(value);
    setSubmitted(true);
    
    // Gửi feedback (có thể tích hợp với analytics hoặc API)
    // Ví dụ: gửi đến Google Analytics, API endpoint, hoặc localStorage
    if (typeof window !== 'undefined') {
      const pageUrl = window.location.href;
      const pageTitle = document.title;
      
      // Lưu vào localStorage để track
      const feedbackData = {
        url: pageUrl,
        title: pageTitle,
        feedback: value,
        timestamp: new Date().toISOString(),
      };
      
      const existingFeedback = JSON.parse(localStorage.getItem('docFeedback') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('docFeedback', JSON.stringify(existingFeedback));
      
      // Có thể gửi đến API endpoint
      // fetch('/api/feedback', { method: 'POST', body: JSON.stringify(feedbackData) });
      
      console.log('Feedback submitted:', feedbackData);
    }
  };

  if (submitted) {
    return (
      <div className={clsx('margin-top--lg', styles.feedbackContainer)}>
        <div className={clsx('card', styles.feedbackCard)}>
          <div className="card__body">
            <p className="text--center">
              {feedback === 'positive' ? '👍 Cảm ơn bạn đã phản hồi!' : '👎 Cảm ơn bạn đã phản hồi!'}
            </p>
            <p className="text--center text--sm margin-top--sm">
              Phản hồi của bạn giúp chúng tôi cải thiện tài liệu tốt hơn.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('margin-top--lg', styles.feedbackContainer)}>
      <div className={clsx('card', styles.feedbackCard)}>
        <div className="card__header">
          <h3 className="text--center">{title}</h3>
        </div>
        <div className="card__body">
          <div className={styles.feedbackButtons}>
            <button
              className={clsx('button button--lg', styles.feedbackButton, styles.positiveButton)}
              onClick={() => handleFeedback('positive')}
              aria-label="Hữu ích">
              👍 Hữu ích
            </button>
            <button
              className={clsx('button button--lg', styles.feedbackButton, styles.negativeButton)}
              onClick={() => handleFeedback('negative')}
              aria-label="Không hữu ích">
              👎 Cần cải thiện
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

