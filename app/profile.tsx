import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Modal, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { postData } from "@/src/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
const { width } = Dimensions.get("window");
const PHOTO_SIZE = width / 3 - 2;

// Add interface for user data
interface UserData {
  username: string;
  fullName: string;
  email: string;
  bio?: string;
  followers?: number;
  following?: number;
  posts?: number;
}

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Edit profile state
  const [editUsername, setEditUsername] = useState("");
  const [editFullName, setEditFullName] = useState("");
  const [editBio, setEditBio] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data() as UserData;
        setUserData(data);
        // Set initial edit values
        setEditUsername(data.username || "");
        setEditFullName(data.fullName || "");
        setEditBio(data.bio || "");
      }
    }
  };

  const handleEditProfile = async () => {
    const user = auth.currentUser;
    if (user && editUsername.trim() && editFullName.trim()) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          username: editUsername.trim(),
          fullName: editFullName.trim(),
          bio: editBio.trim(),
        });

        // Refresh user data
        await fetchUserData();
        setShowEditModal(false);
        Alert.alert("Success", "Profile updated successfully!");
      } catch (error) {
        Alert.alert("Error", "Failed to update profile");
      }
    } else {
      Alert.alert("Error", "Username and full name are required");
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      {/* Profile Info Section */}
      <View style={styles.profileInfo}>
        <Image 
          source={require("../assets/images/AccountIcon2.png")} 
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData?.posts || 0}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData?.followers || 0}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData?.following || 0}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.username}>{userData?.username || 'Loading...'}</Text>
        <Text style={styles.fullName}>{userData?.fullName || ''}</Text>
        <Text style={styles.bio}>{userData?.bio || 'No bio yet'}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => setShowEditModal(true)}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        ListHeaderComponent={renderHeader}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.photoContainer}
            onPress={() => router.push({
              pathname: "/postdesc",
              params: { id: item.id, img: item.img, desc: item.desc }
            })}
          >
            <Image source={item.img} style={styles.photo} />
          </TouchableOpacity>
        )}
      />

      {/* Edit Profile Modal */}
      <Modal
        visible={showEditModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowEditModal(false)}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            
            <TextInput
              style={styles.modalInput}
              placeholder="Username"
              value={editUsername}
              onChangeText={setEditUsername}
              autoCapitalize="none"
            />
            
            <TextInput
              style={styles.modalInput}
              placeholder="Full Name"
              value={editFullName}
              onChangeText={setEditFullName}
            />
            
            <TextInput
              style={[styles.modalInput, styles.bioInput]}
              placeholder="Bio"
              value={editBio}
              onChangeText={setEditBio}
              multiline
              numberOfLines={3}
            />

            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleEditProfile}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setShowEditModal(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/search")}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={24} color="#0095F6" />
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
    padding: 15,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 15,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 13,
    color: "#666",
  },
  bioSection: {
    marginBottom: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  fullName: {
    fontSize: 14,
    color: "#666",
  },
  bio: {
    fontSize: 14,
    marginTop: 5,
  },
  editButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    padding: 7,
    alignItems: "center",
  },
  editButtonText: {
    fontWeight: "600",
  },
  photoContainer: {
    flex: 1/3,
    aspectRatio: 1,
    margin: 1,
  },
  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  modalInput: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#0095F6",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  cancelButton: {
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
  },
});

export default Profile;
