import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <CardBody>
        <Image src={game.background_image} />
        <Stack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
