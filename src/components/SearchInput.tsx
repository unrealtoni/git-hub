import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch color="gray" />} />
      <Input
        type="text"
        borderRadius={20}
        placeholder="Search games"
        size={"sm"}
        variant={"outline"}
      />
    </InputGroup>
  );
};

export default SearchInput;
