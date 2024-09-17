import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      variant={"outline"}
      colorScheme={color}
      paddingX={"1"}
      fontSize={"12px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
