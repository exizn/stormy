import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import type { Comment } from "@/src/data";

const PostDesc = () => {
  const params = useLocalSearchParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: "user1", text: "Great post! 🔥", likes: 2 },
    { id: 2, username: "user2", text: "Amazing! 👏", likes: 5 },
  ]);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        username: "CurrentUser",
        text: comment,
        likes: 0,
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments(comments.map(c => 
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    ));
  };

  return (
    <View style={styles.container}>
      {/* Post Image */}
      <Image source={params.img} style={styles.image} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Feather name="heart" size={24} color={isLiked ? "red" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.description}>{params.desc}</Text>

      {/* Comments Section */}
      <FlatList
        data={comments}
        style={styles.commentsList}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <View style={styles.commentContent}>
              <Text style={styles.username}>{item.username}</Text>
              <Text>{item.text}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => handleLikeComment(item.id)}
              style={styles.likeButton}
            >
              <Feather name="heart" size={16} color={item.likes > 0 ? "red" : "black"} />
              {item.likes > 0 && (
                <Text style={styles.likesCount}>{item.likes}</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Comment Input */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={setComment}
          multiline
          placeholderTextColor="#8e8e8e"
        />
        <TouchableOpacity 
          style={[styles.postButton, !comment.trim() && styles.postButtonDisabled]}
          onPress={handleAddComment}
          disabled={!comment.trim()}
        >
          <Text style={[styles.postButtonText, !comment.trim() && styles.postButtonTextDisabled]}>
            Post
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  actions: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  actionButton: {
    marginLeft: 15,
  },
  description: {
    padding: 15,
    fontSize: 14,
  },
  commentsList: {
    flex: 1,
  },
  commentContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  likesCount: {
    fontSize: 12,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#F2F2F2",
    marginRight: 10,
  },
  postButton: {
    justifyContent: "center",
  },
  postButtonText: {
    color: "#0095F6",
    fontWeight: "600",
  },
  postButtonDisabled: {
    opacity: 0.5,
  },
  postButtonTextDisabled: {
    opacity: 0.5,
  },
});

export default PostDesc;
