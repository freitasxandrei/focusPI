import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const Shape = ({ navigation }: Props) => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Selecione seu shape inicial!" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, marginTop: 50 }} />}
      </View>
    </>
  )
}

export default Shape
