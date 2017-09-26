import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10
  }
});

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={Actions.home} styleName="full-width md-gutter">
          <Text>home</Text>
        </Button>
        <Button onPress={Actions.what} styleName="full-width md-gutter">
          <Text>#what</Text>
        </Button>
        <Button onPress={Actions.go} styleName="full-width md-gutter">
          <Text>go</Text>
        </Button>
        <Button onPress={Actions.quest} styleName="full-width md-gutter">
          <Text>quest</Text>
        </Button>
        <Button onPress={Actions.connect} styleName="full-width md-gutter">
          <Text>connect</Text>
        </Button>
        <Button onPress={Actions.places} styleName="full-width md-gutter">
          <Text>places</Text>
        </Button>
        <Button onPress={Actions.settings} styleName="full-width md-gutter">
          <Text>settings</Text>
        </Button>
        <Button onPress={Actions.help} styleName="full-width md-gutter">
          <Text>help</Text>
        </Button>
      </View>
    );
  }
}

export default DrawerContent;
