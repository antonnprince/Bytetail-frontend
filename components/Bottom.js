import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, StatusBar,ScrollView  } from 'react-native';
import Constants from 'expo-constants';


const Bottom = () => {
  const nav = ['HOME', 'SHOP', '➕', 'PROFILE', 'MORE'];
  const [page, setPage] = useState("HOME");
  return (
    <View>
      <View style={styles.bottomnav}>
        <FlatList
          data={nav}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setPage(item);
                //router.push(`/search/${item}`) // Update the page state when the tab is pressed
              }}
              style={styles.navItem}
            >
              <Text style={[
                styles.tab,
                { color: page === item ? "#FA114F" : "black" },
              ]}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({

  bottomnav: {
    position: 'absolute',
    paddingTop: Constants.statusBarHeight + 5,
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically within bottomnav
  },
  
  navItem: {
    paddingHorizontal:2.5,
  },

  tab: {
    padding: 10,
    marginTop: 5,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 0,
  },

});

export default Bottom;
