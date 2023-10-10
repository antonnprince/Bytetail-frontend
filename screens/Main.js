import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search2 from '../components/Search2';
import { useState } from 'react';

const Main = () => {
  const navigation = useNavigation();
  const heading = ["For You", "Fashion", "Food", "Beauty", "Decor", "XYZ", "ABC"];

  const [page, setPage] = useState("For You");

  const SECTIONS = [
    {
      key: "1",
      data: [
        {
          key: "1",
          source: require('../assets/mcd.jpeg'),
        },
        {
          key: "2",
          source: require('../assets/mcd.jpeg'),
        },
        {
          key: "3",
          source: require('../assets/mcd.jpeg'),
        },
        {
          key: "4",
          source: require('../assets/mcd.jpeg'),
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search2 />
      </View>

      <View style={styles.tabContainer}>
        <FlatList
          data={heading}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setPage(item);
              }}
            >
              <Text
                style={[
                  styles.tab,
                  { color: page === item ? "#FA114F" : "black" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>Tailored for you</Text>

        <FlatList
          data={SECTIONS[0].data}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(item.key)}>
              <Image
                source={item.source}
                style={styles.imageButton}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />

         <Text style={styles.sectionTitle}>Food</Text>
        <FlatList
          data={SECTIONS[0].data}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(item.key)}>
              <Image
                source={item.source}
                style={styles.imageButton}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />

         <Text style={styles.sectionTitle}>Fashion</Text>
        <FlatList
          data={SECTIONS[0].data}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(item.key)}>
              <Image
                source={item.source}
                style={styles.imageButton}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </ScrollView>
      
      <View>
      
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  search: {
    backgroundColor: 'white',
  },
  tabContainer: {
    backgroundColor: 'white',
  },
  tab: {
    padding: 10,
    marginTop: 5,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'inter',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  imageButton: {
    width: 350, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default Main;
