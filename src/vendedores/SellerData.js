import { Search2Icon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  HStack,
  IconButton,
  Input,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DummyJSON from './DummyData.json';

export default function SellerData() {
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [fetchedData, setFetechedData] = useState(DummyJSON);

  //INPUT STATES
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.target.value);
    setInvalid(false);
  };

  const url = `https://api.steinhq.com/v1/storages/633aeaabeced9b09e99dcb17/ticket?search={"vendedor":"${value}"}`;
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

        //HANDLE ID DATA EXISTS
        if (JSON.stringify(data) !== '[]') {
          setInvalid(false);
        } else {
          setInvalid(true);
        }
      })
      .catch(error => {
        setErrorOccured(true);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <VStack width="clamp(300px, 60vw, 550px)" spacing={5}>
        <Text>Sección supersecreta</Text>
        <HStack>
          <Input
            placeholder=""
            size="lg"
            value={value}
            onChange={handleChange}
            isInvalid={invalid}
          />
          {loading ? (
            <IconButton
              icon={<Spinner />}
              isDisabled={true}
              variant="outline"
              colorScheme="teal"
              size="lg"
            />
          ) : (
            <IconButton
              icon={<Search2Icon />}
              variant="outline"
              colorScheme="teal"
              size="lg"
              onClick={() => fetchData()}
              isDisabled={value.length >= 4 ? false : true}
            />
          )}
        </HStack>
        {invalid ? (
          <Badge colorScheme="red">
            <Text>No estás en los registros.</Text>
          </Badge>
        ) : (
          <></>
        )}
        {errorOccured ? (
          <Badge colorScheme="red">
            <Text>Ocurrió un error, intenta más tarde.</Text>
          </Badge>
        ) : (
          <></>
        )}
      </VStack>
      {/* TABLA */}
      {!invalid && !loading ? (
        <Box
          width="clamp(300px, 90vw, 1700px);"
          overflow="auto"
          borderWidth="5px"
          borderRadius="8px"
          borderColor="#2a3346"
          marginTop="25px"
        >
          <TableContainer>
            <Table>
              <Thead>
                <Th>-</Th>
                <Th>ID</Th>
                <Th>Vendedor</Th>
                <Th>Nombre</Th>
                <Th>Esatus de pago</Th>
                <Th>Correo</Th>
                <Th>Celular</Th>
                <Th>Fecha de compra</Th>
                <Th>Costo</Th>
                <Th>Celda elegida</Th>
              </Thead>
              <Tbody>
                {fetchedData.map((item, i) => (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{item.id}</Td>
                    <Td>{item.nombre}</Td>
                    {item.estatus !== 'Pagado' ? (
                      <Td color="red.400">Debe {item.estatus}</Td>
                    ) : (
                      <Td color="green.400">Pagado</Td>
                    )}
                    {item.correo === '' ? (
                      <Td color="red.400">Sin contacto</Td>
                    ) : (
                      <Td color="green.400">{item.correo}</Td>
                    )}
                    {item.celular === '' ? (
                      <Td color="red.400">Sin contacto</Td>
                    ) : (
                      <Td color="green.400">{item.celular}</Td>
                    )}
                    <Td>{item.fecha}</Td>
                    <Td>{item.costo}</Td>
                    <Td>{item.celda}</Td>
                    <Td>{item.vendedor}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
