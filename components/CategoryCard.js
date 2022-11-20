import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imageUrl, textontop}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source = {{
        uri: imageUrl
      }} 
        className = "h-20 w-20 rounded"
      />
      <Text
    className="absolute bottom-0 left-1 text-gray- font-semibold text-md text-white">{textontop}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard