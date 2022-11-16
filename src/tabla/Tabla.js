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
import { InfoOutlineIcon, RepeatIcon } from '@chakra-ui/icons';
import React, { useState, useEffect, useContext } from 'react';
import { MarcadorDisponible, MarcadorComprado } from './Marcador';
import DummyJSON from './DummyData.json';
import { UserContext } from '../UserContext';

export default function Tabla() {
  //Hooks
  const [fetchedData, setFetechedData] = useState(DummyJSON);
  // const [loading, setLoading] = useState(false);
  // const [errorOccured, setErrorOccured] = useState(false);
  const { loading, setLoading, errorOccured, setErrorOccured } =
    useContext(UserContext);

  //Toast
  const toast = useToast();
  const showToast = () => {
    toast({
      title: '¡Datos actualizados!',
      status: 'success',
      duration: 1000,
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
          Esta es la tabla final. De parte de Balam te queremos agradecer tu
          participación. ¡Eres increíble!
        </Text>
        <Button
          rightIcon={<RepeatIcon />}
          colorScheme="teal"
          variant="outline"
          loadingText="Actulizando datos"
          onClick={() => {
            fetchData();
          }}
          isLoading={false}
          disabled={true}
        >
          ¡Gracias por participar!
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

        <HStack spacing={8} paddingBottom="30px">
          {/* <VStack>
            <Text>Boletos faltantes: {fetchedData[0].avaliable}</Text>
            <MarcadorDisponible letter=":)" />
          </VStack> */}
          <VStack>
            <Text fontSize="20px">Se vendieron</Text>
            <Text fontSize="25px" fontWeight="bold">
              ¡{fetchedData[0].sold} Boletos! 🙌🏻
            </Text>
            <Box
              width="60px"
              height="60px"
              borderRadius="5px"
              backgroundColor="green.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold" fontSize="30">
                🌟
              </Text>
            </Box>
          </VStack>
        </HStack>
      </VStack>
      {/* <VStack>
        <HStack>
          <InfoOutlineIcon />
        </HStack>
        <Text pb={3}>
          Presiona o pasa tu cursor por encima de alguna casilla para revelar su
          celda
        </Text>
      </VStack> */}
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
                      <MarcadorDisponible letter="A" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.A}
                        letter="A"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.B === 'Z' ? (
                      <MarcadorDisponible letter="B" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.B}
                        letter="B"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.C === 'Z' ? (
                      <MarcadorDisponible letter="C" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.C}
                        letter="C"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.D === 'Z' ? (
                      <MarcadorDisponible letter="D" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.D}
                        letter="D"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.E === 'Z' ? (
                      <MarcadorDisponible letter="E" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.E}
                        letter="E"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.F === 'Z' ? (
                      <MarcadorDisponible letter="F" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.F}
                        letter="F"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.G === 'Z' ? (
                      <MarcadorDisponible letter="G" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.G}
                        letter="G"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.H === 'Z' ? (
                      <MarcadorDisponible letter="H" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.H}
                        letter="H"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.I === 'Z' ? (
                      <MarcadorDisponible letter="I" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.I}
                        letter="I"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.J === 'Z' ? (
                      <MarcadorDisponible letter="J" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.J}
                        letter="J"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.K === 'Z' ? (
                      <MarcadorDisponible letter="K" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.K}
                        letter="K"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.L === 'Z' ? (
                      <MarcadorDisponible letter="L" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.L}
                        letter="L"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.M === 'Z' ? (
                      <MarcadorDisponible letter="M" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.M}
                        letter="M"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.N === 'Z' ? (
                      <MarcadorDisponible letter="N" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.N}
                        letter="N"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.O === 'Z' ? (
                      <MarcadorDisponible letter="O" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.O}
                        letter="O"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.P === 'Z' ? (
                      <MarcadorDisponible letter="P" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.P}
                        letter="P"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.Q === 'Z' ? (
                      <MarcadorDisponible letter="Q" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.Q}
                        letter="Q"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.R === 'Z' ? (
                      <MarcadorDisponible letter="R" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.R}
                        letter="R"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.S === 'Z' ? (
                      <MarcadorDisponible letter="S" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.S}
                        letter="S"
                        index={i + 1}
                      />
                    )}
                  </Td>
                  <Td>
                    {item.T === 'Z' ? (
                      <MarcadorDisponible letter="T" index={i + 1} />
                    ) : (
                      <MarcadorComprado
                        precio={item.T}
                        letter="T"
                        index={i + 1}
                      />
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
