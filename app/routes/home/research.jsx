import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Link } from '~/components/link';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './research.module.css';

const researchItems = [
  {
    title: 'Driver Drowsiness Detection Using AI',
    journal: 'International Journal of All Research Education & Scientific Methods (IJARESM)',
    date: 'August 2022',
    link: 'https://www.ijaresm.com/driver-drowsiness-detection-usinai',
    description:
      'Published research on AI-driven computer vision challenges, focusing on real-time drowsiness detection systems to improve road safety.',
  },
  {
    title: 'Julian Samora Research Institute — MSU',
    journal: 'Michigan State University — Research Assistant',
    date: 'August 2024 – Present',
    link: 'https://jsri.msu.edu/about/meet-our-team/Students/mr',
    description:
      'Conducting research on sentiment and policy signal modeling using fine-tuned T5 transformer models on large-scale document corpora, and behavioral pattern analysis using Bayesian statistical inference to inform Latino community policy strategy.',
  },
];

export const Research = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.research}
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
              <DecoderText text="Research & Publications" start={visible} delay={500} />
            </Heading>
            <div className={styles.items}>
              {researchItems.map((item, index) => (
                <div
                  className={styles.item}
                  data-visible={visible}
                  key={item.title}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className={styles.itemHeader}>
                    <Text size="l" weight="bold" className={styles.itemTitle}>
                      {item.title}
                    </Text>
                    <Text size="s" className={styles.itemDate}>
                      {item.date}
                    </Text>
                  </div>
                  <Text size="s" className={styles.journal}>
                    {item.journal}
                  </Text>
                  <Text size="m" className={styles.description}>
                    {item.description}
                  </Text>
                  <Link secondary href={item.link}>
                    View details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
