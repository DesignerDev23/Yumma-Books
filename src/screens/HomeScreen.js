import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import booksData from '../data/bookData'; // Adjust the path as needed

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on search term
  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderHorizontalBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
      <View style={styles.horizontalBookItem}>
        <Image source={item.image} style={styles.horizontalBookImage} />
        <View style={styles.horizontalBookDetails}>
          <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.bookDescription} numberOfLines={4}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderVerticalBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
      <View style={styles.verticalBookItem}>
        <Image source={item.image} style={styles.verticalBookImage} />
        <View style={styles.verticalBookDetails}>
          <Text style={styles.verticalbookTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.verticalbookDescription} numberOfLines={3}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <View style={styles.searchContainer}>
        <View style={styles.searchBoxContainer}>
          <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search for books..."
            placeholderTextColor="#fff"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>
      <FlatList
        data={booksData}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        renderItem={renderHorizontalBookItem}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.title}
        renderItem={renderVerticalBookItem}
        contentContainerStyle={styles.verticalList}
        scrollEnabled={false} // Disable scrolling for the vertical FlatList, as it will be inside ScrollView
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fffff',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  searchBox: {
    flex: 1,
    height: '100%',
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 14,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  horizontalList: {
    paddingVertical: 10,
  },
  verticalList: {
    paddingVertical: 10,
  },
  horizontalBookItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    width: width * 0.7,
    height: 250, // Ensure consistent height
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  horizontalBookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover', // Cover the entire container
  },
  horizontalBookDetails: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333', // Darker overlay for better contrast
    width: '100%',
  },
  verticalBookItem: {
    flexDirection: 'row',
    backgroundColor: '#333', // Slightly darker than white
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  verticalBookImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  verticalBookDetails: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#FAFAFA', // Slightly off-white to improve contrast
  },
  verticalbookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    bottom: 8,
    color: '#FAFAFA',
  },
  bookDescription: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  verticalbookDescription: {
    fontSize: 13,
    color: '#FAFAFA',
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;
