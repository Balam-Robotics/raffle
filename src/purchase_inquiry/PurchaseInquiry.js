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
import DummyData from './DummyData.json';

export default function PurchaseInquiry() {
  //FETCH STATES
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [fetchedData, setFetechedData] = useState(DummyData);

  //INPUT STATES
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.target.value);
    setInvalid(false);
  };

  const url = `https://api.steinhq.com/v1/storages/633aeaabeced9b09e99dcb17/ticket?search={"id":"${value}"}`;
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

        //HANDLE ID DATA EXISTS
        if (JSON.stringify(data) !== '[]') {
          setInvalid(false);
          console.log('EXISTES');
        } else {
          setInvalid(true);
          console.log('NO EXISTES');
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
        <Text>
          Si quieres consultar la información y el estado de la compra de tu
          boleto, por favor, escribe debajo el ID de compra. Si no lo tienes,
          acércate a tu vendedor o a un miembro de Balam para brindártelo. Si
          hay información errónea, desactualizada, no apareces, o si quieres
          cambiar el método de contacto, ¡también acerca a nosotros!
        </Text>
        <HStack>
          <Input
            placeholder="AAA00"
            maxLength={5}
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
              isDisabled={value.length === 5 ? false : true}
            />
          )}
        </HStack>
        {invalid ? (
          <Badge colorScheme="red">
            <Text>El ID no existe o es incorrecto.</Text>
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
                <Th>ID</Th>
                <Th>Nombre</Th>
                <Th>Esatus de pago</Th>
                <Th>Contacto</Th>
                <Th>Fecha de compra</Th>
                <Th>Costo</Th>
                <Th>Celda elegida</Th>
                <Th>Vendedor</Th>
              </Thead>
              <Tbody>
                {fetchedData.map((item, i) => (
                  <Tr key={i}>
                    <Td>{item.id}</Td>
                    <Td>{item.nombre}</Td>
                    {item.estatus !== 'Pagado' ? (
                      <Td color="red.400">Debe ${item.estatus}</Td>
                    ) : (
                      <Td color="green.400">Pagado</Td>
                    )}
                    {item.contacto === '' ? (
                      <Td color="red.400">Sin contacto</Td>
                    ) : (
                      <Td color="green.400">{item.contacto}</Td>
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
