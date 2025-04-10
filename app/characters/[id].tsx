import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getCharacterById } from '../data/characters';
export default function CharacterDetailScreen() {
  const { id } = useLocalSearchParams();
  const character = getCharacterById(id as string);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Character not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {character.imageUrl && (
        <Image 
          source={{ uri: character.imageUrl }} 
          style={styles.characterImage} 
        />
      )}
      <View style={styles.content}>
        <Text style={styles.name}>{character.name}</Text>
        {character.title && <Text style={styles.title}>{character.title}</Text>}
        {character.house && <Text style={styles.house}>House {character.house}</Text>}
        <Text style={styles.description}>{character.description}</Text>
        
        {character.allegiances && character.allegiances.length > 0 && (
          <View style={styles.allegiances}>
            <Text style={styles.sectionTitle}>Allegiances:</Text>
            {character.allegiances.map((allegiance, index) => (
              <Text key={index} style={styles.allegiance}>• {allegiance}</Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  characterImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  house: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  allegiances: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  allegiance: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});