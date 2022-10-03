import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export function MarcadorDisponible() {
  return (
    <Box
      width="45px"
      height="45px"
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
      height="45px"
      borderRadius="5px"
      backgroundColor="green.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {props.isInvisible ? <></> : <Text fontSize="15px">${props.precio}</Text>}
    </Box>
  );
}
