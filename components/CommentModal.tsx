import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import type { Comment, Post } from "@/src/data";

interface CommentModalProps {
  visible: boolean;
  onClose: () => void;
  post: Post;
}

export default function CommentModal({ visible, onClose, post }: CommentModalProps) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (post?.comments) {
      setComments(post.comments);
    }
  }, [post]);

  if (!post) return null;

  const handleAddComment = () => {
    if (comment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        userId: 999,
        username: "CurrentUser",
        text: comment,
        timestamp: "Just now",
        likes: 0,
      };

      setComments([...comments, newCommentObj]);
      setComment("");
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments(comments.map(c => 
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    ));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Comments</Text>
            <TouchableOpacity>
              <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Image source={{ uri: item.profileImage }} style={styles.avatar} />
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

          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                value={comment}
                onChangeText={setComment}
                multiline
                placeholderTextColor="#8e8e8e"
              />
              <TouchableOpacity 
                style={[
                  styles.postButton,
                  !comment.trim() && styles.postButtonDisabled
                ]}
                onPress={handleAddComment}
                disabled={!comment.trim()}
              >
                <Text style={[
                  styles.postButtonText,
                  !comment.trim() && styles.postButtonDisabled
                ]}>
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
}

/* ✅ Fix: Define Styles to Prevent "styles Doesn't Exist" Error */
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "90%",
    paddingBottom: Platform.OS === "ios" ? 34 : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  commentContainer: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 20,
  },
  postButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
  },
  postButtonText: {
    color: "#0095f6",
    fontWeight: "600",
  },
  postButtonDisabled: {
    color: "#0095f6",
    opacity: 0.3,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  likesCount: {
    fontSize: 12,
    marginLeft: 4,
  },
});
