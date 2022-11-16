import { Divider, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrizeCard from './PrizeCard';
import AirPods from '../assets/AirPods3.png';
import Bose from '../assets/Bose.png';
import Echo from '../assets/Echo.png';
import iPad from '../assets/iPadAir.png';
import Polaroid from '../assets/Polaroid.png';

export default function Inicio() {
  return (
    <VStack>
      <VStack>
        <Text fontSize="20px">Los ganadores se anunciarán el</Text>
        <Text fontSize="30px" fontWeight="bold">
          ¡Viernes 18 de noviembre!
        </Text>
      </VStack>
      <VStack width="clamp(300px, 60vw, 550px)">
        <Divider />
      </VStack>
      <SimpleGrid
        minChildWidth="280px"
        spacing="30px"
        width="clamp(370px, 60vw, 1200px);"
      >
        <PrizeCard
          title="iPad Air de 64 GB"
          description="Quinta Generación, WiFi"
          image={iPad}
        />
        <PrizeCard
          title="AirPods"
          description="Tercera Generación"
          image={AirPods}
        />
        <PrizeCard
          title="Fujifilm Instax Mini 11"
          description="Cámara Instantánea"
          image={Polaroid}
        />
        <PrizeCard
          title="Bose Soundlink Micro"
          description="Bocina Bluetooth"
          image={Bose}
        />
        <PrizeCard
          title="Echo Dot Alexa"
          description="Tercera Generación"
          image={Echo}
        />
      </SimpleGrid>
    </VStack>
  );
}
