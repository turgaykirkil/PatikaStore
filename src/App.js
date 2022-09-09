import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import productData from './product-data.json';
import ProductCard from './components/ProductCard';

const renderProducts = ({item}) => <ProductCard product={item} />;

const searchBar = () => {
  return (
    <View>
      <Text style={styles.title}>PATİKAStore</Text>
      <TextInput style={styles.input} placeholder={'Ara...'} />
    </View>
  );
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={searchBar}
        data={productData}
        renderItem={renderProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: 'transparent',
    margin: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    margin: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default App;
