import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image_container} source={{uri: product.imgURL}} />
      <View style={styles.bottom_container}>
        <Text style={styles.title_container}>{product.title}</Text>
        <Text style={styles.price_container}>{product.price}</Text>
        <Text style={styles.stok_container}>
          {product.inStock ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
