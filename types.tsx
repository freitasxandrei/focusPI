
export type NO_PARAMS = undefined
export type RootStackParamList = {
  Root: NO_PARAMS
  NotFound: NO_PARAMS
}

export type MainStackParamList = {
  Main: NO_PARAMS
  CompletedScreen: NO_PARAMS
}

export type BottomTabParamList = {
  Início: NO_PARAMS
  Status: NO_PARAMS
  Configurações: NO_PARAMS
  Shape: NO_PARAMS
}

export type HomeParamList = {
  HomeScreen: NO_PARAMS
  PlayScreen: {
    id: string
  }
}

export type StatsParamList = {
  StatsScreen: NO_PARAMS
}

export type SettingsParamList = {
  SettingsScreen: NO_PARAMS
  AboutScreen: NO_PARAMS
}
