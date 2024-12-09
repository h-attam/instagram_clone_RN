import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function FitImage({src}) {
    //pencerenin genişliğini dönderir
    const width = Dimensions.get("window").width;
    const ratio = 1080 / width;
    const height = 607 /ratio;
  return (
   <Image style={{width, height}} source={{uri:src}}/>
  )
}