import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'ErhesPedia' }} />
      <Stack.Screen name="characters/index" options={{ title: 'Characters' }} />
      <Stack.Screen name="characters/[id]" options={{ title: 'Character Details' }} />
      <Stack.Screen name="schedule/index" options={{ title: 'Хичээлийн хуваарь' }} />
      <Stack.Screen name="castles/index" options={{ title: 'Famous Castles' }} />
      <Stack.Screen name="map/index" options={{ title: 'Map of Westeros' }} />
      <Stack.Screen name="books/index" options={{ title: 'Every GRR Martins Books' }} />
    </Stack>
  );
}
