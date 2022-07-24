export const fonts = {
  body: "Inter, sans-serif",
  heading: "Jost, sans-serif",
  mono: "Source Code Pro, monospace",
  inter: "Inter, sans-serif",
};

// Text styles combine several properties in one block that can be used with
// the `textStyle` prop. One thing of note is that these don't work with the
// `Heading` component, so use `Text` instead.
// Ref: https://chakra-ui.com/docs/features/text-and-layer-styles#text-styles
export const textStyles = {
  heading1: {
    fontFamily: "heading",
    fontSize: "28px",
    lineHeight: 8,
    fontWeight: "medium",
  },
  heading2: {
    fontFamily: "heading",
    fontSize: "24px",
    lineHeight: 7,
    fontWeight: "medium",
  },
  heading3: {
    fontFamily: "heading",
    fontSize: "20px",
    lineHeight: 6,
    fontWeight: "medium",
  },
  heading4: {
    fontFamily: "heading",
    fontSize: "16px",
    lineHeight: 5,
    fontWeight: "medium",
    letterSpacing: "1.5px",
  },
  body1: {
    fontFamily: "body",
    fontSize: "15px",
    lineHeight: 5,
    fontWeight: "regular",
  },
  body2: {
    fontFamily: "body",
    fontSize: "14px",
    lineHeight: 5,
    fontWeight: "regular",
  },
  body3: {
    fontFamily: "body",
    fontSize: "13px",
    lineHeight: 5,
    fontWeight: "regular",
  },
};
