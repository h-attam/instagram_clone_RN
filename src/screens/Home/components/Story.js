import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Story({story}) {
  return (
    <View key={story.id} style={styles.storyContainer}>
      <LinearGradient colors={['#DE0046', '#F7A34B']} style={styles.gradient}>
        <Image style={styles.avatar} source={{uri: story.user.avatar}} />
      </LinearGradient>
      <Text style={styles.text}>{story.user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
    storyContainer: {
      alignItems: 'center',
      marginHorizontal: 8,
    },
    gradient: {
      width: 65, // Gradient boyutu avatarın etrafında görünmesi için avatar boyutundan biraz büyük
      height: 65,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30, // Avatar tam yuvarlak olacak
    },
    text: {
      marginTop: 5,
      fontSize: 12,
      color: '#000',
    },
  });
  
