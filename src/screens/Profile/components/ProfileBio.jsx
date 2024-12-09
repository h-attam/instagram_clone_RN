import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo
        repudiandae ex hic harum?
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#000000',
  },
  name: {
    fontWeight: '700',
    color:"#000000"
  },
  description: {
    marginVertical:5,
    color:"#000000",
  },
  link: {
    color:"#004c8b",
    fontWeight:"400",
  },
  editProfileButton:{
    borderColor:"#cbcbcb",
    borderWidth:1,
    marginVertical:10,
    alignItems:"center",
    paddingVertical:5,
    borderRadius:5,
  },
  editProfileText:{
    fontWeight:"700",
    color:"#000000",
  },
});
