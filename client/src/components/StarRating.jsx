import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HStack, Box } from "@chakra-ui/react";

export default function StarRating({ rating, setRating, count, size }) {
  // count:  number of stars you want, pass as props
  //size: size of star that you want

  const [hover, setHover] = useState(null);
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          >
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              transition="color 200ms"
            />
          </Box>
        );
      })}
    </HStack>
  );
}
