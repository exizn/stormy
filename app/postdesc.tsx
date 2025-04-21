import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { postData } from "@/src/data";

const { width } = Dimensions.get("window");

export default function PostDesc() {
  const params = useLocalSearchParams();
  const post = postData.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={post.img} style={styles.image} />
      <Text style={styles.description}>{post.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: width,
    height: width,
    resizeMode: "cover",
  },
  description: {
    padding: 15,
    fontSize: 16,
  },
}); 