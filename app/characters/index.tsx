import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';
import { characters } from '../data/characters';
import { useRouter } from 'expo-router';

export default function CharactersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.characterItem}
            onPress={() => router.push({
              pathname: "/characters/[id]",
              params: { id: item.id }
            })}
          >
            {item.imageUrl && (
              <Image 
                source={{ uri: item.imageUrl }} 
                style={styles.characterImage} 
              />
            )}
            <View style={styles.characterInfo}>
              <Text style={styles.characterName}>{item.name}</Text>
              {item.house && <Text style={styles.characterHouse}>House {item.house}</Text>}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  characterItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  characterInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  characterHouse: {
    fontSize: 14,
    color: '#666',
  },
});