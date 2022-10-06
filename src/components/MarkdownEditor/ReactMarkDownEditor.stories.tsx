import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { ReactMarkdownEditor } from './ReactMarkdownEditor';

export default {
  title: 'Utils/ReactMarkDownEditor',
  decorators: [
    (Story) => (
      <Box height="100vh" w="25%">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  component: ReactMarkdownEditor,
} as ComponentMeta<typeof ReactMarkdownEditor>;

const markdown = `
# H1

## H2

### H3

**bold text**

*italicized text*

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

---

[Link](https:www.google.com)

~Strikethrough~

* [ ] task
* [x] completed task
`;

const Template: ComponentStory<typeof ReactMarkdownEditor> = () => (
  <ReactMarkdownEditor>{markdown}</ReactMarkdownEditor>
);

export const ReactMarkdownEditorStory = Template.bind({});
ReactMarkdownEditorStory.storyName = 'ReactMarkdownEditor';
