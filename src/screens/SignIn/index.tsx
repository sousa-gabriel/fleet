import { Container, Slogan, Title } from "./styles";
import backGroundImage from "../../assets/background.png";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container source={backGroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com o Google" />
    </Container>
  );
}
