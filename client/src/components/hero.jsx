import {
  Button,
  Box,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <Box bg="#7B70F6" h="745" mx="160px" my="0px">
      <Text as="p" fontWeight="bold" fontSize="80px" color="black" pt="180px">
        Service Simplified,
      </Text>
      <Text as="p" fontWeight="bold" fontSize="80px" color="black">
        Satisfaction Amplified.
      </Text>
      <Text as="p" fontWeight="bold" fontSize="60px" color="gray.400">
        Your one stop destination.
      </Text>

      <Box mt='30px'>
        <InputGroup borderRadius={10} size="sm" width='550px' m='auto'>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="black.600" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid #949494"
            bg='white'
            borderRadius='20px'
          />
          <InputRightAddon p={0} border="none" bg='#7B70F6'>
            <Button
              size="sm"
              // borderLeftRadius={0}
              // borderRightRadius={3.3}
              borderRadius='0 20px 20px 0'
              // border="1px solid #949494"
              bg='#905BE8'
              w='116px'
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Hero;
