import React from 'react';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const vh = () => (height / 990);
export const vw = () => (width / 540);

export const fontSize = (size) => (Math.round(size * vh));
