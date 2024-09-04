import { TouchableOpacityProps } from "react-native";
import { Container, Load, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export const Button = ({ title, isLoading, ...rest }: ButtonProps) => {
  return (
    <Container activeOpacity={0.7} {...rest} disabled={isLoading}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
};
