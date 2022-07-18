import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

interface PushNotif {
  title: string;
}
const PushNotifClass: FC<PushNotif> = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      <Text style={styles.textstyle}>{props.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PushNotifClass;
