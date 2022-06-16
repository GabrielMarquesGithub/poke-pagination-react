import { Container } from "./style";

export function Pokemon({ imgUrl, name }: { imgUrl: string; name: string }) {
  return (
    <Container>
      <img src={imgUrl} alt={`Imagem do ${name}`} />
      <span>{name}</span>
    </Container>
  );
}
