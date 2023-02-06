import type { StoryObj } from '@storybook/react';

import parse from 'html-react-parser';

import { SAMPLE_MARKDOWN } from '../__tests__/constants';
import { Markdown } from '../src';
import { MarkdownWithParser } from '../src/MarkdownWithParser';
import { parseLinkFromDOMNode } from '../src/utils';

export default {
  component: Markdown,
  title: 'Components/Markdown',
  description: 'Render formatted plaintext.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__MARKDOWN,
    },
  },
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    source: {
      table: {
        category: 'Content',
      },
    },
    allowedTags: {
      table: {
        category: 'DOM attributes',
      },
    },
    baseUri: {
      table: {
        category: 'DOM attributes',
      },
    },
    container: {
      table: {
        category: 'DOM attributes',
      },
    },
    textRef: {
      table: {
        category: 'DOM attributes',
      },
    },
  },
};

type Story = StoryObj<typeof Markdown>;

export const Example: Story = {
  args: {
    baseUri: 'https://app.launchdarkly.com',
    source: SAMPLE_MARKDOWN,
  },
};

const Link = (props: { href: string }) => {
  return (
    <span style={{ backgroundColor: 'red' }}>
      <a href={props.href}>Hey there!</a>
    </span>
  );
};

export const WithSmartLink: Story = {
  render: () => {
    return (
      <MarkdownWithParser
        source={SAMPLE_MARKDOWN}
        allowedTags={['a', '#text', 'p', 'li', 'ol', 'ul', 'b', 'strong', 'i', 'em', 'br', 'code']}
        smartLinks={[
          {
            domain: 'launchdarkly.com',
            renderer: ({ href }) => <Link href={href} />,
          },
        ]}
      />
    );
  },
};

type SmartLink = {
  domain: string;
  renderer: (props: { href: string; text?: string }) => JSX.Element;
};

export const WithChildrenRender: Story = {
  render: () => {
    const parseMarkdown = (renderedMarkdown: string) =>
      parse(renderedMarkdown, {
        // The replace option will replace all DOM nodes when the replace function returns a valid React element.
        replace: (domNode) => {
          const parsedLink = parseLinkFromDOMNode(domNode);
          if (!parsedLink) {
            return;
          }
          const smartLinks: SmartLink[] = [
            {
              domain: 'launchdarkly.com',
              renderer: ({ href }) => <Link href={href} />,
            },
          ];
          const smartLink = smartLinks?.find((s) => {
            return parsedLink.url.hostname.endsWith(s.domain);
          });
          if (!smartLink) {
            return;
          }
          return smartLink.renderer({
            href: parsedLink.url.toString(),
            text: parsedLink.text,
          });
        },
      });

    return (
      <Markdown
        source={SAMPLE_MARKDOWN}
        allowedTags={['a', '#text', 'p', 'li', 'ol', 'ul', 'b', 'strong', 'i', 'em', 'br', 'code']}
      >
        {parseMarkdown}
      </Markdown>
    );
  },
};
