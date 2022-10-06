import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Inicio from './inicio/Inicio';
import Tabla from './tabla/Tabla';
import DataFetchingIndicator from './DataFetchingIndicator';
import { UserContext } from './UserContext';
import PurchaseInquiry from './purchase_inquiry/PurchaseInquiry';
import SellerData from './vendedores/SellerData';

function App() {
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    },
  });

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
                  Balam | Zedal
                </Text>
                <ColorModeSwitcher />
              </HStack>
              <DataFetchingIndicator />
            </HStack>
            <VStack p={5}>
              <Text fontSize="3xl" fontWeight="600">
                🏆 ¡Rifa Zedam 2022! 🏆
              </Text>
              <Text fontSize="xl">
                ¡Participa y ve todo lo que podrías ganarte!
              </Text>
            </VStack>
            <Tabs variant="enclosed" align="center" defaultIndex={1}>
              <TabList>
                <Tab isDisabled={true}></Tab>
                <Tab>Inicio</Tab>
                <Tab>Tabla</Tab>
                <Tab>Consultar Compra</Tab>
                <Tab></Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <></>
                </TabPanel>
                <TabPanel>
                  <Inicio />
                </TabPanel>
                <TabPanel>
                  <Tabla />
                </TabPanel>
                <TabPanel>
                  <PurchaseInquiry />
                </TabPanel>
                <TabPanel>
                  <SellerData />
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
