import { PropsWithChildren } from "react";
import "./button.css";
import { Text, Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type ButtonProps = Pick<
  ChakraButtonProps,
  | "isDisabled"
  | "isLoading"
  | "leftIcon"
  | "loadingText"
  | "leftIcon"
  | "rightIcon"
  | "size"
  | "spinner"
  | "spinnerPlacement"
  | "variant"
  | "onClick"
> & {
  labelColor?: string;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = "md", children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <ChakraButton type="button" {...props} sx={{ color: `${props.labelColor}`, backgroundColor: "danger" }}>
      <Text textStyle="body1">{children}</Text>
    </ChakraButton>
  );
};
