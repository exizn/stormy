import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { useState } from 'react';

const regions = [
  {
    id: '1',
    name: 'The North',
    description: 'Home to House Stark, known for its harsh winters and resilient people.',
    color: '#7B8B8B'
  },
  {
    id: '2',
    name: 'The Vale',
    description: 'Ruled by House Arryn from the Eyrie, protected by the Mountains of the Moon.',
    color: '#8B7355'
  },
  {
    id: '3',
    name: 'The Riverlands',
    description: 'Central region ruled by House Tully, known for its many rivers.',
    color: '#698B69'
  },
  {
    id: '4',
    name: 'The Westerlands',
    description: 'Home to the wealthy House Lannister and their gold mines.',
    color: '#CD6839'
  },
  {
    id: '5',
    name: 'The Reach',
    description: 'Fertile region ruled by House Tyrell, known for its knights and agriculture.',
    color: '#A2CD5A'
  },
  {
    id: '6',
    name: 'The Iron Islands',
    description: 'Home to the fierce House Greyjoy and their fearsome ironborn raiders.',
    color: '#4F4F4F'
  },
  {
    id: '7',
    name: 'The Crownlands',
    description: 'The royal region containing King\'s Landing and ruled directly by the Iron Throne.',
    color: '#8B7765'
  },
  {
    id: '8',
    name: 'The Stormlands',
    description: 'Ancient seat of House Baratheon, known for its fierce storms and warrior culture.',
    color: '#CD853F'
  },
  {
    id: '9',
    name: 'Dorne',
    description: 'The southernmost kingdom ruled by House Martell, known for its independence and unique customs.',
    color: '#DAA520'
  }
];

export default function MapScreen() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/86/a2/9d/86a29dd55f9d05be8db98f3bbcc126b9.jpg' }}
        style={styles.mapImage}
        resizeMode="contain"
      />
      
      <View style={styles.regionsContainer}>
        <Text style={styles.regionsTitle}>Regions of Westeros</Text>
        {regions.map((region) => (
          <TouchableOpacity
            key={region.id}
            style={[
              styles.regionButton,
              { backgroundColor: region.color },
              selectedRegion === region.id && styles.selectedRegion
            ]}
            onPress={() => setSelectedRegion(region.id)}
          >
            <Text style={styles.regionName}>{region.name}</Text>
            {selectedRegion === region.id && (
              <Text style={styles.regionDescription}>{region.description}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapImage: {
    width: '100%',
    height: 800,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  regionsContainer: {
    padding: 16,
  },
  regionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  regionButton: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  selectedRegion: {
    borderWidth: 2,
    borderColor: '#c41e3a',
  },
  regionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  regionDescription: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  }
}); 