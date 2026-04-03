import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

const experiences = [
  {
    company: 'BorgWarner',
    location: 'Michigan, USA',
    role: 'Data Scientist - Intern',
    period: 'May 2025 – Present',
    highlights: [
      'Fine-tuned an LLM classification pipeline using LangChain and Databricks on 3,000+ engineering documents, improving decision-routing accuracy by 36%',
      'Built a production-grade imputation pipeline using XGBoost with feature-level chaining deployed via Azure WebApp achieving 87% fill accuracy',
    ],
  },
  {
    company: 'Kings Crowd',
    location: 'USA',
    role: 'Data Scientist',
    period: 'August 2025 – December 2025',
    highlights: [
      'Engineered a classification pipeline using logistic regression with L1 regularization and Bayesian hyperparameter tuning across 200+ financial metrics on 10K+ startups, achieving 86.7% AUC',
    ],
  },
  {
    company: 'Michigan State University — JSRI',
    location: 'Michigan, USA',
    role: 'Data Scientist - Research Assistant',
    period: 'August 2024 – Present',
    highlights: [
      'Fine-tuned a T5 transformer model on a 50K+ document NPR corpus for sentiment and policy signal modeling',
      'Performed behavioral pattern analysis on 1,500+ records using Bayesian statistical inference, improving targeted outreach by 20%',
    ],
  },
  {
    company: 'Inviz.ai',
    location: 'India',
    role: 'Data Scientist',
    period: 'May 2022 – August 2024',
    highlights: [
      'Designed behavioral segmentation models analyzing 20M+ user interactions, boosting content recommendation CTR by 37%',
      'Built a FAISS product ranking system using transformers with geolocation and review-sentiment re-ranking signals',
      'Engineered event-level clickstream feature pipelines on VertexAI using PySpark and Airflow, processing 6M+ daily signals',
      'Designed A/B experiments with causal inference methodology, identifying statistically significant 18% CTR lift across 20M+ users',
    ],
  },
  {
    company: 'HighRadius Corporation',
    location: 'India',
    role: 'Product Engineer - Intern',
    period: 'January 2022 – April 2022',
    highlights: [
      'Built an ensemble forecasting model combining XGBoost and Random Forest on 500K+ financial transactions, achieving 72% payment-timing accuracy',
    ],
  },
];

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
              <DecoderText text="Work Experience" start={visible} delay={500} />
            </Heading>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div
                  className={styles.timelineItem}
                  data-visible={visible}
                  key={`${exp.company}-${index}`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <Text size="l" weight="bold" className={styles.company}>
                        {exp.company}
                      </Text>
                      <Text size="s" className={styles.period}>
                        {exp.period}
                      </Text>
                    </div>
                    <Text size="m" className={styles.role}>
                      {exp.role} · {exp.location}
                    </Text>
                    <ul className={styles.highlights}>
                      {exp.highlights.map((h, i) => (
                        <li key={i}>
                          <Text size="s">{h}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
