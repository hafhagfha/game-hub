import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
