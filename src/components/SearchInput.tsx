import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="gray" />}
        />
        <Input
          ref={ref}
          type="text"
          borderRadius={20}
          placeholder="Search games"
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
