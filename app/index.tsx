import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/2c/05/f3/2c05f3c839a22372869aa712601ab28a.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>A world of Song of Ice and Fire</Text>
        <Text style={styles.subtitle}>Variables:</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/characters')}
        >
          <Text style={styles.buttonText}>Favourite Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/schedule")}
        >
          <Text style={styles.buttonText}>This year schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/castles")}
        >
          <Text style={styles.buttonText}>Cool Castles</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/map")}
        >
          <Text style={styles.buttonText}>Map of Westeros</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/books")}
        >
          <Text style={styles.buttonText}>Books</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#c41e3a',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});