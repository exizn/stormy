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
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import type { Comment } from "@/src/data";

const { width } = Dimensions.get("window");

interface PostProps {
  post?: {
    id: number;
    profileImage?: any;
    profileName?: string;
    img: any;
    desc: string;
  };
}

const Post = ({ post }: PostProps) => {
  if (!post) return null;

  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: "user1", text: "Great post! 🔥", likes: 2 },
    { id: 2, username: "user2", text: "Amazing! 👏", likes: 5 },
  ]);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

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
      {/* Post Header */}
      <View style={styles.header}>
        <Image source={post.profileImage} style={styles.avatar} />
        <Text style={styles.username}>{post.profileName}</Text>
      </View>

      {/* Post Image */}
      <Image source={post.img} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike}>
          <Feather 
            name="heart" 
            size={24} 
            color={isLiked ? "red" : "black"} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => setShowComments(!showComments)}
        >
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        <Text style={styles.username}>{post.profileName}</Text> {post.desc}
      </Text>

      {/* Comments Section */}
      {showComments && (
        <>
          <FlatList
            data={comments}
            style={styles.commentsList}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <View style={styles.commentContent}>
                  <Text style={styles.commentUsername}>{item.username}</Text>
                  <Text>{item.text}</Text>
                </View>
                <TouchableOpacity 
                  onPress={() => handleLikeComment(item.id)}
                  style={styles.likeButton}
                >
                  <Feather 
                    name="heart" 
                    size={16} 
                    color={item.likes > 0 ? "red" : "black"} 
                  />
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: width,
    height: width,
  },
  actions: {
    flexDirection: "row",
    padding: 10,
  },
  actionButton: {
    marginLeft: 15,
  },
  description: {
    padding: 10,
  },
  commentsList: {
    maxHeight: 200,
  },
  commentContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  commentContent: {
    flex: 1,
  },
  commentUsername: {
    fontWeight: "bold",
    marginRight: 5,
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

export default Post;
