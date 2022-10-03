import React from 'react';
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontFamily="co-text">
        <Grid padding={3}>
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
    </ChakraProvider>
  );
}

export default App;
