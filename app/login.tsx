import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';  // Make sure you have this file
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

// Add credentials constants
const VALID_EMAIL = "Test";
const VALID_PASSWORD = "Test";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showSignup, setShowSignup] = useState(false);
  
  // Update signup state names
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [firstName, setFirstName] = useState("");  // Changed from fullName
  const [lastName, setLastName] = useState("");    // Added lastName

  const handleLogin = async () => {
    if (email.trim() && password.trim()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.replace("/");  // Navigate immediately after successful login
      } catch (error) {
        Alert.alert(
          "Login Failed",
          "Incorrect email or password. Please try again.",
          [{ text: "OK" }]
        );
      }
    }
  };

  const handleSignup = async () => {
    if (signupEmail && signupPassword && firstName && lastName) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          signupEmail, 
          signupPassword
        );

        // Add additional user data to Firestore with first and last name
        const userDoc = doc(db, 'users', userCredential.user.uid);
        await setDoc(userDoc, {
          email: signupEmail,
          firstName: firstName,
          lastName: lastName,
          fullName: `${firstName} ${lastName}`,  // Combine for full name
          username: signupEmail.split('@')[0],   // Default username from email
          bio: "",
          followers: 0,
          following: 0,
          posts: 0,
          createdAt: new Date().toISOString(),
        });

        // Clear form and navigate
        setShowSignup(false);
        setSignupEmail("");
        setSignupPassword("");
        setFirstName("");
        setLastName("");
        router.replace("/");

      } catch (error) {
        const firebaseError = error as FirebaseError;
        Alert.alert(
          "Signup Failed",
          firebaseError.message || "Could not create account",
          [{ text: "OK" }]
        );
      }
    } else {
      Alert.alert(
        "Invalid Input",
        "Please fill in all fields",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Login View */}
      <View style={[styles.mainContainer, showSignup && styles.blur]}>
        <View style={styles.logoContainer}>
          <Image 
            source={require("../assets/images/Post1.png")} 
            style={styles.logo}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone number, email or username"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#666"
          />

          <TouchableOpacity 
            style={[styles.loginButton, (!email.trim() || !password.trim()) && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={!email.trim() || !password.trim()}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotButtonText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => setShowSignup(true)}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Update Signup Modal */}
      <Modal
        visible={showSignup}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSignup(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Account</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={signupEmail}
              onChangeText={setSignupEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={signupPassword}
              onChangeText={setSignupPassword}
              secureTextEntry
            />

            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleSignup}
            >
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowSignup(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  blur: {
    opacity: 0.7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "#666",
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#0095F6",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonDisabled: {
    opacity: 0.5,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotButton: {
    alignItems: "center",
    marginTop: 20,
  },
  forgotButtonText: {
    color: "#0095F6",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: "#DBDBDB",
    paddingTop: 20,
  },
  footerText: {
    color: "#666",
  },
  signupText: {
    color: "#0095F6",
    fontWeight: "600",
  },
}); 