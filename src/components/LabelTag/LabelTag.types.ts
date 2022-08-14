export type LabelTagType = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'solid' | 'outline';
  text: string;
  colorScheme?:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram';
};
