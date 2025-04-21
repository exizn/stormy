import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { postData } from "@/src/data";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const STORY_SIZE = 70;
const AVATAR_SIZE = STORY_SIZE - 6;

const Home = () => {
  const router = useRouter();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // Mock stories data
  const storiesData = [
    { id: 1, username: "Your Story", image: require("../assets/images/Post1.png"), isUser: true },
    { id: 2, username: "user1", image: require("../assets/images/Post1.png") },
    { id: 3, username: "user2", image: require("../assets/images/Post1.png") },
    { id: 4, username: "user3", image: require("../assets/images/Post1.png") },
  ];

  const renderStories = () => (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storiesData.map((story) => (
          <View key={story.id} style={styles.storyItem}>
            <LinearGradient
              colors={story.isUser ? ['#E0E0E0', '#E0E0E0'] : ['#FFC107', '#F44336', '#E91E63']}
              style={styles.storyRing}
            >
              <View style={styles.storyImageContainer}>
                <Image source={story.image} style={styles.storyImage} />
                {story.isUser && (
                  <View style={styles.addStoryButton}>
                    <Feather name="plus" size={14} color="white" />
                  </View>
                )}
              </View>
            </LinearGradient>
            <Text style={styles.storyUsername} numberOfLines={1}>
              {story.username}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <LinearGradient
            colors={['#FFC107', '#F44336', '#E91E63']}
            style={styles.postStoryRing}
          >
            <Image source={item.profileImage} style={styles.postAvatar} />
          </LinearGradient>
          <Text style={styles.postUsername}>{item.profileName}</Text>
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <TouchableOpacity 
        onPress={() => router.push({
          pathname: "/postdesc",
          params: { id: item.id, img: item.img, desc: item.desc }
        })}
      >
        <Image source={item.img} style={styles.postImage} />
      </TouchableOpacity>

      {/* Post Actions */}
      <View style={styles.postActions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <Feather
              name="heart"
              size={24}
              color={likedPosts.includes(item.id) ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="message-circle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>1,234 likes</Text>

      {/* Post Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.postDescription}>
          <Text style={styles.postUsername}>{item.profileName}</Text> {item.desc}
        </Text>
        <Text style={styles.viewComments}>View all 123 comments</Text>
        <Text style={styles.timeAgo}>2 HOURS AGO</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="message-circle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts List with Stories */}
      <FlatList
        data={postData}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderStories}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="home" size={24} color="#0095F6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/search")}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <MaterialIcons name="account-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  headerRight: {
    flexDirection: "row",
  },
  headerButton: {
    marginLeft: 20,
  },
  storiesContainer: {
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  storyItem: {
    alignItems: "center",
    marginLeft: 15,
    marginVertical: 8,
  },
  storyRing: {
    width: STORY_SIZE,
    height: STORY_SIZE,
    borderRadius: STORY_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  storyImageContainer: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  storyImage: {
    width: AVATAR_SIZE - 4,
    height: AVATAR_SIZE - 4,
    borderRadius: (AVATAR_SIZE - 4) / 2,
  },
  addStoryButton: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#0095F6",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  storyUsername: {
    fontSize: 12,
    marginTop: 4,
    maxWidth: STORY_SIZE,
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postStoryRing: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "white",
  },
  postUsername: {
    fontWeight: "600",
  },
  postImage: {
    width,
    height: width,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionButton: {
    marginLeft: 15,
  },
  likes: {
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  postDescription: {
    marginVertical: 5,
  },
  viewComments: {
    color: "#666",
    marginVertical: 5,
  },
  timeAgo: {
    color: "#666",
    fontSize: 10,
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    backgroundColor: "white",
  },
});

export default Home;