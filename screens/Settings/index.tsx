import * as React from 'react'
import { Alert } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/trainingSlice'
import { openURL } from '../../utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const Settings = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const openPrivacyPolicy = () => {
    try {
      openURL('focus.com')
    } catch (error) {
      console.error(error)
    }
  }
  const clearData = () => {
    Alert.alert(
      'Restaurar dados',
      'Tem certeza que deseja apagar os dados? Não será possível recuperar.',
      [
        {
          text: 'Restaurar dados',
          onPress: () => dispatch(reset()),
          style: 'destructive',
        },
        {
          text: 'Cancelar',
        },
      ]
    )
  }
  return (
    <>
      <List.Item title="Restaurar dados" onPress={clearData} />
    </>
    
  )
}

export default Settings
