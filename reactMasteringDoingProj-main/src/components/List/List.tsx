import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  itemListText,
  itemListTextStrike,
  circleInactive,
  circleActive,
  deleteIconColor
} from '../../utils/colors';
import APP_THEME from "../../theme";
const { height, width } = Dimensions.get('window');

class List extends Component<any, any> {

  onToggleCircle = () => {
    const { isCompleted, id, completeItem, incompleteItem } = this.props;
    if (isCompleted) {
      incompleteItem(id);
    } else {
      completeItem(id);
    }
  };

  render() {
    const { name, cat, loc } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.column}>
            <TouchableOpacity>
              <View
                  style={[
                    styles.circle,
                    {
                      borderColor: APP_THEME.colors.secondary,
                      backgroundColor: APP_THEME.colors.secondary
                    }
                  ]}
              />
            </TouchableOpacity>
            <Text style={[styles.text]}>
              {name} ({cat}) ({loc})
            </Text>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width - 50,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: width / 8,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 15
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    margin: 10,
  },
  button: {
    marginRight: 10
  }
});
export default List;