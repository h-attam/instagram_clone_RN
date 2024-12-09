import {View, Text, ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.stories}>
      <View style={styles.story}>
       <View style={{
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderRadius:35,
        padding:5,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
       }}>
       <Image
          style={styles.storyImage}
          source={require('./../../../../assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.webp')}
        />
       </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>

      <View style={styles.story}>
       <View style={{
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderRadius:35,
        padding:5,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
       }}>
       <Image
          style={styles.storyImage}
          source={require('./../../../../assets/2XLC3TIgpGRsIC1Ap772ePFH5ot-mobile.jpg')}
        />
       </View>
        <Text style={styles.storyLabel}>Story 2</Text>
      </View>

      <View style={styles.story}>
       <View style={{
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderRadius:35,
        padding:5,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
       }}>
       <Image
          style={styles.storyImage}
          source={require('./../../../../assets/images.jpeg')}
        />
       </View>
        <Text style={styles.storyLabel}>Story 3</Text>
      </View>

      <View style={styles.story}>
       <View style={{
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderRadius:35,
        padding:5,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
       }}>
       <Image
          style={styles.storyImage}
          source={require('./../../../../assets/2hEWiKAXq4W36L5Zif31aYfD09L-desktop.jpg')}
        />
       </View>
        <Text style={styles.storyLabel}>Story 4</Text>
      </View>

      <View style={styles.story}>
       <View style={{
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderRadius:35,
        padding:5,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
       }}>
       <TouchableOpacity style={styles.newStoryButton}>
        <Text style={styles.plusSign}>+</Text>
       </TouchableOpacity>
       </View>
        <Text style={styles.storyLabel}>Story 5</Text>
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding:5,
  },
  story:{
    marginRight:10,
    alignItems:"center",
  },
  storyLabel:{
    color:"#000000",
    marginTop:3,
  },
  stories:{
    paddingHorizontal:15,
  },
  plusSign:{
    fontSize:40,
  },
  newStoryButton:{
    justifyContent:"center",
    alignItems:"center",
  }
});
