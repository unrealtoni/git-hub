import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeader = ({ gameQuery }: Props) => {
  const header = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={3}>
      {header}
    </Heading>
  );
};

export default DynamicHeader;
