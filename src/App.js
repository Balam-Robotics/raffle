import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Inicio from './inicio/Inicio';
import Tabla from './tabla/Tabla';
import DataFetchingIndicator from './DataFetchingIndicator';
import { UserContext } from './UserContext';

function App() {
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider
        value={{ loading, setLoading, errorOccured, setErrorOccured }}
      >
        <Box textAlign="center" fontFamily="co-text">
          <Grid padding={3}>
            <HStack display="flex" justifyContent="space-between">
              <HStack>
                <Text
                  fontSize="3xl"
                  fontWeight="800"
                  pointerEvents="none"
                  userSelect="none"
                >
                  Balam
                </Text>
                <ColorModeSwitcher />
              </HStack>
              <DataFetchingIndicator />
            </HStack>
            <VStack p={5}>
              <Text fontSize="3xl" fontWeight="600">
                🏆 ¡Rifa Balam 2022! 🏆
              </Text>
              <Text fontSize="xl">
                ¡Participa y ve todo lo que podrías ganarte!
              </Text>
            </VStack>
            <Tabs variant="enclosed" align="center">
              <TabList>
                <Tab>Inicio</Tab>
                <Tab>Tabla</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Inicio />
                </TabPanel>
                <TabPanel>
                  <Tabla />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Grid>
        </Box>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
