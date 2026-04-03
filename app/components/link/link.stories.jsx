import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://github.com/SanjeevDurge">Primary link</Link>
    <Link secondary href="https://www.linkedin.com/in/durgesanjeev/">
      Secondary link
    </Link>
  </StoryContainer>
);
