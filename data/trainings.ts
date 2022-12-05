import { ImageSourcePropType } from 'react-native'

export interface Training {
  id: string
  title: string
  subtitle: string
  time: number
  order: number
  image: ImageSourcePropType
  uri: string
  track: number
}
export interface TrainingItem {
  item: Training
}

export const popular: Training[] = [
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02c',
    order: 1,
    title: 'Wings To Fly',
    track: 0,
    subtitle: 'Determination',
    time: 2,
    uri: 'https://docs.google.com/uc?id=1jgzJ952yQ3gnL0K7PyPbrCxBavf7A59M',
    image: require('../assets/images/treino1.jpg'),
  },
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02d',
    order: 2,
    title: 'Electro Fight',
    track: 1,
    subtitle: 'Power',
    time: 5,
    uri: 'https://docs.google.com/uc?id=1XC--M5weKJpgH_FoYHcMr7v0QnHYbvDy',
    image: require('../assets/images/treino2.jpg'),
  },
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02e',
    order: 3,
    title: 'Cold Water',
    track: 2,
    subtitle: 'Glory',
    time: 5,
    uri: 'https://docs.google.com/uc?id=1bw9Kybp8xiIgE9s7fkf03P--tNYZ2rgw',
    image: require('../assets/images/treino3.jpg'),
  },
]

export const trainings = {
  popular
}
