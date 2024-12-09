import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../Icons';
import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';


export default function Profile() {

  const screenWidth = Dimensions.get("window").width;

  const numColumns = 3;

  const imageSize = (screenWidth - (numColumns + 1) * 2)/numColumns;

  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image source={{uri: item.image}} style={{width:imageSize, height:imageSize,margin:1}}/>
    </TouchableOpacity>
  )
  
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
      <Header/>
      <ProfileInfo/>
      <ProfileBio/>
      <ProfileStory/>
      <FlatList
      keyExtractor={(item,index) => index.toString}
      numColumns={numColumns}
      data={posts}
      renderItem={renderProps}
      contentContainerStyle={styles.photoGrid}
      style={{marginTop:15}}
      />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid:{
    paddingHorizontal:5,
  }
});
