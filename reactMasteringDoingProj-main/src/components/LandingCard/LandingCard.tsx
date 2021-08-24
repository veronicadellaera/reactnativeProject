// generator/templates/component.ts
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class LandingCard extends Component {
 
  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
            //   content goes here
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});


export default LandingCard;