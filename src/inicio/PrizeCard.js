import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function PrizeCard(props) {
  return (
    <VStack>
      <Image
        src={props.image}
        width="300px"
        pointerEvents="none"
        userSelect="none"
      />
      <Text fontSize="3xl" fontWeight="800">
        {props.title}
      </Text>
      <Text fontSize="xl">{props.description}</Text>
    </VStack>
  );
}
