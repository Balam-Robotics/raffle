import { WarningIcon } from '@chakra-ui/icons';
import { Box, HStack, Spinner, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function DataFetchingIndicator() {
  const { loading, errorOccured } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Box>
          <HStack p={3}>
            <Spinner />
            <Text>Actulizando datos</Text>
          </HStack>
        </Box>
      ) : (
        <>
          {errorOccured ? (
            <Box>
              <HStack p={3}>
                <WarningIcon color="red.400" fontSize="20px" />
                <Text>¡Ocurrió un error!</Text>
              </HStack>
            </Box>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
