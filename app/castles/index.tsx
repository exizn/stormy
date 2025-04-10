import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from '@/components/Themed';
import { Castle } from '../types/castle';

const castles: Castle[] = [
  {
    id: '1',
    name: 'Winterfell',
    location: 'The North',
    house: 'House Stark',
    description: 'The ancient seat of House Stark and the capital of the North. Known for its hot springs and double walls.',
    imageUrl: 'https://i.pinimg.com/236x/ef/1b/15/ef1b15ba82645c605a51c20953160ecc.jpg'
  },
  {
    id: '2',
    name: 'The Red Keep',
    location: 'King\'s Landing',
    house: 'House Baratheon/Lannister',
    description: 'The fortress of King\'s Landing and seat of the Iron Throne. Home to the royal family.',
    imageUrl: 'https://i.pinimg.com/236x/8f/ad/77/8fad77947deda1068533078b97f4fb62.jpg'
  },
  {
    id: '3',
    name: 'Dragonstone',
    location: 'Blackwater Bay',
    house: 'House Targaryen',
    description: 'The ancestral seat of House Targaryen, built with Valyrian stonecraft and magic.',
    imageUrl: 'https://i.pinimg.com/736x/31/34/08/313408772234078ab8cf61a58989502f.jpg'
  },
  {
    id: '4',
    name: 'Casterly Rock',
    location: 'The Westerlands',
    house: 'House Lannister',
    description: 'The ancestral stronghold of House Lannister, carved out of a great stone hill.',
    imageUrl: 'https://i.pinimg.com/236x/41/81/0e/41810e91b316f9382e436362c390d0eb.jpg'
  },
  {
    id: '5',
    name: 'The Eyrie',
    location: 'The Vale',
    house: 'House Arryn',
    description: 'The ancient seat of House Arryn, considered impregnable due to its location.',
    imageUrl: 'https://i.pinimg.com/736x/88/e7/30/88e7304bcdda16772b6de889d4da3376.jpg'
  }
];

export default function CastlesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={castles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.castleCard}>
            <Image 
              source={{ uri: item.imageUrl }}
              style={styles.castleImage}
            />
            <View style={styles.castleInfo}>
              <Text style={styles.castleName}>{item.name}</Text>
              <Text style={styles.castleHouse}>{item.house}</Text>
              <Text style={styles.castleLocation}>{item.location}</Text>
              <Text style={styles.castleDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  castleCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  castleImage: {
    width: '100%',
    height: 200,
  },
  castleInfo: {
    padding: 16,
  },
  castleName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  castleHouse: {
    fontSize: 18,
    color: '#c41e3a',
    marginBottom: 4,
  },
  castleLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  castleDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  }
});
