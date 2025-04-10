import { View, FlatList, Image, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { useState } from 'react';
const books = [
  { title: 'A Game of Thrones', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.w3d8LUWTBDhNv1sl5Y4PGgHaLW?rs=1&pid=ImgDetMain',price: '$10.99' },
  { title: 'A Clash of Kings', author: 'George R. R. Martin', image: 'https://i.harperapps.com/hcanz/covers/9780006479895/y648.jpg',price: '$9.99' },
  { title: 'A Storm of Swords', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.eGsZ1rNUckdmVBeBAN0yHgHaL4?rs=1&pid=ImgDetMain', price: '$11.99' },
  { title: 'A Feast for Crows', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.1BIz1DOu_XyzBJp_gGPjNAHaLV?rs=1&pid=ImgDetMain', price: '$12.99' },
  { title: 'A Dance with Dragons', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.RjkVPRq2h6f4qtSKst7zIwAAAA?rs=1&pid=ImgDetMain', price: '$13.99' },
  { title: 'Fire & Blood', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.C8te7FZLwlmgnoOJB4zCvAHaL3?rs=1&pid=ImgDetMain', price: '$14.99' },
  { title: 'The Winds of Winter', author: 'George R. R. Martin', image: 'https://th.bing.com/th/id/OIP.2g3SHQyIdkRk-bo9Pn6HjAHaLP?rs=1&pid=ImgDetMain', price: '$15.99' }
];
const index = () => {
  return (
    
    <FlatList
      data={books}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.bookContainer}>
          <Image source={{ uri: item.image }} style={styles.bookImage} />
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <Text style={styles.bookPrice}>{item.price}</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => Linking.openURL('https://www.amazon.com/s?k=' + encodeURIComponent(item.title))}
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};


const styles = StyleSheet.create({
  bookContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  bookPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default index

