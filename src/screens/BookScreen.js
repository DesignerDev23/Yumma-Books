import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const BookScreen = ({ route }) => {
  const { book } = route.params;
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>Read the Story</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={book.image} style={styles.bookImage} />
          <View style={styles.overlay}>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </View>
        </View>
        <Text style={styles.bookDescription}>{book.description}</Text>
        <Text style={styles.bookContent}>{book.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backButton: {
    width: 50, // Set width of the button
    height: 50, // Set height of the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: '#000',
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    width: width - 40,
    height: height * 0.4,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
  },
  bookDescription: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
    marginBottom: 20,
  },
  bookContent: {
    fontSize: 14,
    color: 'black',
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Poppins-Regular',
  },
});

export default BookScreen;
