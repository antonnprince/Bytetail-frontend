import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/Search';

const MenuItem = ({ item, addToCart }) => {
  const { id, name, price, image } = item;
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    addToCart(item);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      addToCart(item, false);
    }
  };

  return (
    <View style={styles.menuItemContainer}>
      <View style={styles.menuItemTextContainer}>
        <Text style={styles.menuItemName}>{name}</Text>
        <Text style={styles.menuItemPrice}>Price: ${price}</Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={decreaseCount}>
          <FontAwesome name="minus" size={18} color="#555" />
        </TouchableOpacity>
        {count > 0 && (
          <Text style={styles.counterText}>{count}</Text>
        )}
        <TouchableOpacity style={styles.counterButton} onPress={increaseCount}>
          <FontAwesome name="plus" size={18} color="#555" />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.menuItemImage} />
    </View>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item, increment = true) => {
    if (increment) {
      setCartItems([...cartItems, item]);
      setItemCount(itemCount + 1);
      setTotalPrice(totalPrice + item.price);
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      setItemCount(itemCount - 1);
      setTotalPrice(totalPrice - item.price);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.menuItemsContainer}>
        <View style={styles.header}>
          <Image source={require('../assets/profilepic.png.jpg')} style={styles.logo} />
          <Text style={styles.hotelName}>Paragon</Text>
        </View>
        <ScrollView>
          <MenuItem
            item={{
              id: 1,
              name: 'Veg Burger',
              price: 10.99,
              image: require('../assets/burger.png.jpg'),
            }}
            addToCart={addToCart}
          />
          <MenuItem
            item={{
              id: 2,
              name: 'Spaghetti',
              price: 8.99,
              image: require('../assets/sphagetti.png.jpg'),
            }}
            addToCart={addToCart}
          />
          {/* Add more menu items here */}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.cartContainer} onPress={toggleCart}>
        <Text style={styles.cartTitle}>Cart</Text>
        <View style={styles.cartSummary}>
          <Text style={styles.cartItemCount}>Items: {itemCount}</Text>
          <Text style={styles.cartTotalPrice}>
            Total: ${totalPrice.toFixed(2)}
          </Text>
        </View>
        {isCartOpen && (
          <View style={styles.cartItemsContainer}>
            {cartItems.map((item) => (
              <Text key={item.id} style={styles.cartItemText}>
                {item.name}
              </Text>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 26,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: 'black',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
  },
  menuItemsContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 80,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 100,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft: 10,
  },
  menuItemTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItemPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    color: '#FA114F',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  counterButton: {
    padding: 6,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cartContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Inter',
    color: '#FA114F',
  },
  cartSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemCount: {
    fontSize: 16,
  },
  cartTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    marginTop: 10,
  },
  cartItemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Cart;
