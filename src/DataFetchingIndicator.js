import { WarningIcon } from '@chakra-ui/icons';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function DataFetchingIndicator() {
  const { loading, errorOccured } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Box>
          <VStack p={3}>
            <Spinner />
            <Text>Cargando</Text>
          </VStack>
        </Box>
      ) : (
        <>
          {errorOccured ? (
            <Box>
              <VStack p={3}>
                <WarningIcon color="red.400" fontSize="20px" />
                <Text>¡Ocurrió un error!</Text>
              </VStack>
            </Box>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
