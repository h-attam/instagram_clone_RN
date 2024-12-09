import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Heart, Logo, Messenger, Plus } from '../../../Icons'

export default function Header() {
  return (
    <SafeAreaView>
    <View style={styles.header}>
      <Logo/>
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.6}>
        <Plus size={24}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.dotContainer}>
                <View style={styles.dot}/>
            </View>
        <Heart size={24}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.dotContainer}>
                <View style={styles.dot}/>
            </View>
        <Messenger size={24}/>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
header:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    height:44,
    alignItems:"center",
    paddingBottom:4,
},

actions:{
    flexDirection:"row",
    gap:30,
},
dotContainer:{
 position:"absolute",
 right:0,
 top:0,
 zIndex:2,
 width:11,
 height:11,
 backgroundColor:"white",
 justifyContent:"center",
 alignItems:"center",
},
dot:{
 backgroundColor:"#fe2650",
 width:8,
 height:8,
 borderRadius:8,
}


})