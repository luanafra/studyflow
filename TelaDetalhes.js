import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function TelaDetalhes({ route }) {
  const { titulo, imagem, descricao } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.descricao}>{descricao}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#483D8B',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
