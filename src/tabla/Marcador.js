import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export function MarcadorDisponible(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      width="45px"
      height="45px"
      borderWidth="2.5px"
      borderRadius="5px"
      borderColor="#1e62aa"
      backgroundColor="rgb(37, 150, 190, 0)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <Box
          width="45px"
          height="45px"
          borderWidth="4px"
          borderRadius="5px"
          borderColor="#51abcb"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#1e62aa"
          p={5}
        >
          <Text
            fontSize="17px"
            fontWeight="bold"
            pointerEvents="none"
            userSelect="none"
            textAlign="center"
            color="white"
          >
            {props.letter}
            {props.index}
          </Text>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export function MarcadorComprado(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      width="45px"
      height="45px"
      borderRadius="5px"
      backgroundColor="green.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <Box
          width="45px"
          height="45px"
          borderWidth="4px"
          borderRadius="5px"
          borderColor="#74bd96"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Text
            fontSize="17px"
            fontWeight="bold"
            pointerEvents="none"
            userSelect="none"
            textAlign="center"
            color="white"
          >
            {props.letter}
            {props.index}
          </Text>
        </Box>
      ) : props.isInvisible ? (
        <></>
      ) : (
        <Text fontSize="15px" color="white">
          ${props.precio}
        </Text>
      )}
    </Box>
  );
}
