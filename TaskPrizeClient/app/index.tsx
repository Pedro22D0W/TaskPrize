import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Redirect, useRouter } from 'expo-router';
import InputContainer from './components/InputContainer';
import ButtonType1 from './components/buttonType1';

export default function Index() {
  return <Redirect href="/login" />;
}
