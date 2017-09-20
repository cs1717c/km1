import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import TouchableItem from 'react-navigation/src/views/TouchableItem';

/**
 * Component that renders the navigation list in the drawer.
 */
const MenuItems = ({
  navigation: { state, navigate },
  items,
  activeItemKey,
  activeTintColor,
  activeBackgroundColor,
  inactiveTintColor,
  inactiveBackgroundColor,
  getLabel,
  renderIcon,
  onItemPress,
  style,
  labelStyle,
}) =>
  <View style={[styles.container, style]}>
    {items.map((route, index) => {
      const focused = activeItemKey === route.key;
      const color = focused ? activeTintColor : inactiveTintColor;
      const backgroundColor = focused
        ? activeBackgroundColor
        : inactiveBackgroundColor;
      const scene = { route, index, focused, tintColor: color };
      const icon = renderIcon(scene);
      const label = getLabel(scene);
      return (
        <TouchableItem
          key={route.key}
          onPress={() => {
            onItemPress({ route, focused });
          }}
          delayPressIn={0}
        >
          <View style={[styles.item, { backgroundColor }]}>
            {icon
              ? <View
                  style={[styles.icon, focused ? null : styles.inactiveIcon]}
                >
                  {icon}
                </View>
              : null}
            {typeof label === 'string'
              ? <Text style={[styles.label, { color }, labelStyle]}>
                  {label}
                </Text>
              : label}
          </View>
        </TouchableItem>
      );
    })}
  </View>;

/* Material design specs - https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs */
MenuItems.defaultProps = {
  activeTintColor: '#FF0076',
  activeBackgroundColor: 'rgba(255, 255, 255, 1)',
  inactiveTintColor: '#fff',
  inactiveBackgroundColor: 'transparent',
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    paddingVertical: 0,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow:4,
    width:'100%',
    //borderWidth:1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderWidth:1,
    borderColor:'rgba(255,255,255,1)',
    borderRadius:4,
    marginVertical:10,
    width:'100%',
    marginHorizontal:20,
    justifyContent: 'flex-end'
    
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    margin: 10,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontSize:20,
    justifyContent: 'flex-end'
  },
});

export default MenuItems;
