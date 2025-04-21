import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { postData } from "@/src/data";
import type { Post } from "@/src/data";
import { useRouter } from "expo-router";
import BottomNav from '@/components/BottomNav';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 3;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();

  const filteredPosts = postData.filter((post) =>
    post.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePostPress = (post: Post) => {
    router.push({
      pathname: "/postdesc",
      params: { id: post.id, img: post.img.uri, desc: post.desc },
    });
  };

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#8e8e8e" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#8e8e8e" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Results */}
      <ScrollView>
        {isSearchFocused || searchQuery ? (
          // List view for search results
          <View style={styles.searchResults}>
            {filteredPosts.map((post, index) => (
              <TouchableOpacity
                key={index}
                style={styles.searchResultItem}
                onPress={() => handlePostPress(post)}
              >
                <Image
                  source={require("../assets/images/avatars.png")}
                  style={styles.resultAvatar}
                />
                <View style={styles.resultTextContainer}>
                  <Text style={styles.resultUsername}>
                    {post.username || `User ${post.id}`}
                  </Text>
                  <Text style={styles.resultDesc} numberOfLines={1}>
                    {post.desc}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          // Grid view for explore
          <View style={styles.exploreGrid}>
            {postData.map((post, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePostPress(post)}
                style={styles.gridItem}
              >
                <Image source={post.img} style={styles.gridImage} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/")}
        >
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/search")}
        >
          <FontAwesome name="search" size={24} color="#0095F6" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/profile")}
        >
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
  searchHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  searchResults: {
    paddingHorizontal: 16,
  },
  searchResultItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  resultAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultUsername: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
  },
  resultDesc: {
    color: "#8e8e8e",
    fontSize: 13,
  },
  exploreGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    padding: 1,
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  navItem: {
    padding: 10,
  },
});

export default Search; 