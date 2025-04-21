import { Stack, Redirect } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Redirect href="/login" />
      
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="login"
          options={{ 
            headerShown: false,
            gestureEnabled: false,
          }} 
        />
        <Stack.Screen 
          name="/"
          options={{
            headerShown: true,
            headerTitle: "Instagram",
            gestureEnabled: false,
          }}
        />
        <Stack.Screen 
          name="search" 
          options={{
            headerShown: true,
            headerTitle: "Search",
          }}
        />
        <Stack.Screen 
          name="profile" 
          options={{
            headerShown: true,
            headerTitle: "Profile",
          }}
        />
        <Stack.Screen 
          name="postdesc" 
          options={{
            headerShown: true,
            headerTitle: "Post",
          }}
        />
      </Stack>
    </>
  );
}
