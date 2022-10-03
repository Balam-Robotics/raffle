import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export function MarcadorDisponible() {
  return (
    <Box
      width="45px"
      height="40px"
      borderWidth="2.5px"
      borderRadius="5px"
      borderColor="#1e62aa"
      display="flex"
      alignItems="center"
      justifyContent="center"
    ></Box>
  );
}

export function MarcadorComprado(props) {
  return (
    <Box
      width="45px"
      height="40px"
      borderRadius="5px"
      backgroundColor="#30d15e"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {props.isInvisible ? (
        <></>
      ) : (
        <Text fontSize="13.5px">${props.precio}</Text>
      )}
    </Box>
  );
}
