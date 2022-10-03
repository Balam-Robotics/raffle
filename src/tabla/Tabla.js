import {
  Badge,
  Button,
  Text,
  useToast,
  VStack,
  Tr,
  Th,
  Thead,
  Td,
  Table,
  Tbody,
  Box,
  HStack,
  TableContainer,
  Divider,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import { MarcadorDisponible, MarcadorComprado } from './Marcador';
import DummyJSON from './DummyData.json';

export default function Tabla() {
  //Hooks
  const [fetchedData, setFetechedData] = useState(DummyJSON);
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  //Toast
  const toast = useToast();
  const showToast = () => {
    toast({
      title: '¡Datos actualizados!',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
  };

  //Data fetching
  const url =
    'https://api.steinhq.com/v1/storages/633aeaabeced9b09e99dcb17/table';

  const fetchData = () => {
    setLoading(true);
    setErrorOccured(false);

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setLoading(false);
        setFetechedData(data);
        showToast();
      })
      .catch(error => {
        setErrorOccured(true);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <VStack width="clamp(300px, 60vw, 550px)" spacing={5}>
        <Text>
          Para consultar el estado de la tabla de la rifa con los datos más
          recientes, presiona el botón de abajo.
        </Text>
        <Button
          rightIcon={<RepeatIcon />}
          colorScheme="teal"
          variant="outline"
          loadingText="Obteniendo datos"
          onClick={() => {
            fetchData();
          }}
          isLoading={loading}
        >
          Recargar tabla
        </Button>

        {!errorOccured ? (
          <></>
        ) : (
          <Badge colorScheme="red">
            <VStack>
              <Text>Ocurrió un error, intenta más tarde.</Text>
            </VStack>
          </Badge>
        )}
        <Divider />
        <HStack spacing={8} paddingBottom="5px">
          <VStack>
            <MarcadorDisponible />
            <Text>Boletos disponibles: {fetchedData[0].avaliable}</Text>
          </VStack>
          <VStack>
            <MarcadorComprado />
            <Text>Boletos vendidos: {fetchedData[0].sold}</Text>
          </VStack>
        </HStack>
      </VStack>
      {/* TABLA */}
      <Box
        width="clamp(300px, 90vw, 1700px);"
        overflow="auto"
        borderWidth="5px"
        borderRadius="8px"
        borderColor="#2a3346"
      >
        <TableContainer>
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                <Th>-</Th>
                <Th>A</Th>
                <Th>B</Th>
                <Th>C</Th>
                <Th>D</Th>
                <Th>E</Th>
                <Th>F</Th>
                <Th>G</Th>
                <Th>H</Th>
                <Th>I</Th>
                <Th>J</Th>
                <Th>K</Th>
                <Th>L</Th>
                <Th>M</Th>
                <Th>N</Th>
                <Th>O</Th>
                <Th>P</Th>
                <Th>Q</Th>
                <Th>R</Th>
                <Th>S</Th>
                <Th>T</Th>
              </Tr>
            </Thead>
            <Tbody>
              {fetchedData.map((item, i) => (
                <Tr key={i}>
                  <Td>
                    <Text>{item.Ñ}</Text>
                  </Td>
                  <Td>
                    {item.A === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.B === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.C === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.D === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.E === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.F === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.G === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.H === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.I === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.J === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.K === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.L === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.M === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.N === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.O === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.P === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.Q === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.R === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.S === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                  <Td>
                    {item.T === 'Z' ? (
                      <MarcadorDisponible />
                    ) : (
                      <MarcadorComprado />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
