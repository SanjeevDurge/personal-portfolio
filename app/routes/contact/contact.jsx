import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { cssProps, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Get in touch with Sanjeev Durge for collaborations, projects, or just to say hi.',
  });
};

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Transition in timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.form} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Get in touch" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Text
              className={styles.description}
              data-status={status}
              size="l"
              as="p"
              style={getDelay(tokens.base.durationXS, initDelay, 0.5)}
            >
              {"I'm always interested in hearing about new projects, research collaborations, or opportunities. Feel free to reach out through any of the channels below."}
            </Text>
            <div className={styles.contactLinks} data-status={status} style={getDelay(tokens.base.durationS, initDelay, 0.6)}>
              <a href="mailto:durgesan@msu.edu" className={styles.contactLink}>
                <Icon icon="email" size={24} />
                <span>durgesan@msu.edu</span>
              </a>
              <a href="https://www.linkedin.com/in/durgesanjeev/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Icon icon="linkedin" size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/SanjeevDurge" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Icon icon="github" size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://share.streamlit.io/user/sanjeevdurge" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Icon icon="streamlit" size={24} />
                <span>Streamlit</span>
              </a>
            </div>
            <Button
              className={styles.button}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              href="mailto:durgesan@msu.edu"
              icon="send"
            >
              Send me an email
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = parseFloat(delayMs) * multiplier;
  return cssProps({ delay: numToMs((parseFloat(offset) + numDelay).toFixed(0)) });
}
