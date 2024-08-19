import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    swiperRef.current.scrollBy(1);
  };

  const handlePrevious = () => {
    swiperRef.current.scrollBy(-1);
  };

  const handleGetStarted = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={true}
        onIndexChanged={handleIndexChange}
        loop={false}
        activeDotColor='#000'
        dotColor='#888'
        paginationStyle={styles.paginationStyle}
      >
        <View style={styles.slide}>
          <Image source={require('../../assets/icon.png')} style={styles.icon} />
          <Text style={styles.title}>Welcome to Yumma Books</Text>
          <Text style={styles.description}>Discover the best books and authors across Africa.</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/slide2.png')} style={styles.image} />
          <Text style={styles.title}>Explore a Vast Collection</Text>
          <Text style={styles.description}>Browse through various genres and find your next read.</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/slide3.png')} style={styles.image} />
          <Text style={styles.title}>Join the Community</Text>
          <Text style={styles.description}>Connect with fellow readers and share your thoughts on books.</Text>
        </View>
      </Swiper>

      <View style={styles.navigationContainer}>
        {currentIndex > 0 && (
          <TouchableOpacity
            style={styles.navButton}
            onPress={handlePrevious}
          >
            <Text style={styles.navButtonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentIndex < 2 ? (
          <TouchableOpacity
            style={styles.navButton}
            onPress={handleNext}
          >
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.navButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.navButtonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  paginationStyle: {
    bottom: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20, // Adjusted to fit the view
    width: '100%',
  },
  navButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    bottom: 90,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default OnboardingScreen;
