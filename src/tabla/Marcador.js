import { Box } from '@chakra-ui/react';
import React from 'react';

export function MarcadorDisponible() {
  return (
    <Box
      width="30px"
      height="30px"
      borderWidth="2.5px"
      borderRadius="5px"
      borderColor="#1e62aa"
    />
  );
}

export function MarcadorComprado() {
  return (
    <Box
      width="30px"
      height="30px"
      borderRadius="5px"
      backgroundColor="#30d15e"
    />
  );
}
