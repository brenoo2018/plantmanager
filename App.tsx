import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  // useEffect(() => {
  //   // const subscription = Notifications.addNotificationReceivedListener(
  //   //   async (notification) => {
  //   //     const data = notification.request.content.data.plant as PlantProps;
  //   //     console.log('dataa-->', data);
  //   //   }
  //   // );

  //   // return () => subscription.remove();

  //   // async function notifications() {
  //   //   await Notifications.cancelAllScheduledNotificationsAsync();
  //   //   const data = await Notifications.getAllScheduledNotificationsAsync();
  //   //   console.log('data-->', data);
  //   // }

  //   // notifications();
  // }, []);

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return <Routes />;
}
