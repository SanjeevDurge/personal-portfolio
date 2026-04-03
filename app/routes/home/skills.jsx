import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './skills.module.css';

const skillCategories = [
  {
    title: 'Programming & Cloud',
    skills: ['Python', 'SQL', 'Hadoop', 'PySpark', 'GCP', 'Azure', 'AWS', 'Databricks', 'FastAPI', 'Terraform'],
  },
  {
    title: 'Databases & Visualization',
    skills: ['BigQuery', 'Snowflake', 'Tableau', 'Redshift', 'Power BI', 'Matplotlib', 'Seaborn', 'Azure Data Lake', 'Docker', 'GitHub'],
  },
  {
    title: 'Data Analysis & Engineering',
    skills: ['Pandas', 'NumPy', 'Regression Diagnostics', 'Statistical Analysis', 'A/B Testing', 'Causal Inference', 'CI/CD'],
  },
  {
    title: 'MLOps & AI Frameworks',
    skills: ['RAG', 'Apache Airflow', 'TensorFlow', 'Keras', 'PyTorch', 'Agentic AI', 'Kubernetes', 'MLflow', 'LangChain', 'LangGraph'],
  },
];

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
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
              <DecoderText text="Skills & Technologies" start={visible} delay={500} />
            </Heading>
            <div className={styles.categories}>
              {skillCategories.map((category, index) => (
                <div
                  className={styles.category}
                  data-visible={visible}
                  key={category.title}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <Text size="l" weight="bold" className={styles.categoryTitle}>
                    {category.title}
                  </Text>
                  <div className={styles.tags}>
                    {category.skills.map(skill => (
                      <span className={styles.tag} key={skill}>
                        {skill}
                      </span>
                    ))}
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
