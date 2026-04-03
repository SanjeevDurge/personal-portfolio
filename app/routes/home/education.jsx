import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './education.module.css';

const educationData = [
  {
    school: 'Michigan State University',
    location: 'Michigan, USA',
    degree: 'Masters, Data Science',
    gpa: 'CGPA: 4.0',
    period: 'August 2024 – May 2026',
  },
  {
    school: 'LP University',
    location: 'India',
    degree: 'Bachelors, Computer Science & Engineering (Hons.), Machine Learning',
    gpa: '',
    period: 'June 2019 – May 2023',
  },
];

export const Education = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.education}
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
              <DecoderText text="Education" start={visible} delay={500} />
            </Heading>
            <div className={styles.cards}>
              {educationData.map((edu, index) => (
                <div
                  className={styles.card}
                  data-visible={visible}
                  key={edu.school}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className={styles.cardIcon}>🎓</div>
                  <div className={styles.cardContent}>
                    <Text size="l" weight="bold" className={styles.school}>
                      {edu.school}
                    </Text>
                    <Text size="m" className={styles.degree}>
                      {edu.degree}
                    </Text>
                    {edu.gpa && (
                      <Text size="s" className={styles.gpa}>
                        {edu.gpa}
                      </Text>
                    )}
                    <Text size="s" className={styles.period}>
                      {edu.period} · {edu.location}
                    </Text>
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
