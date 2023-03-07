import { View, Text, StyleSheet, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import products from '../data/products';
import React from 'react';
import Button from "../components/Button";
import { useSelector } from 'react-redux';

const ProductDetailsScreens = () => {

    const product = products[0];
    const { width } = useWindowDimensions();
    const { selectedProduct } = useSelector((state) => state.products);

    return (

        <View>
            <ScrollView>
                <FlatList data={selectedProduct.images} renderItem={({ item }) => (
                    <Image source={{ url: item }} style={{ width, aspectRatio: 1 }} />
                )} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />

                <View style={{ padding: 20 }}>

                    <Text style={styles.title}>{selectedProduct.name}</Text>
                    <Text style={styles.price}>${selectedProduct.price}</Text>
                    <Text style={styles.description}>{selectedProduct.description}</Text>
                </View>
            </ScrollView>

            <Button text="Add to cart" />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
    },
    description: {
        fontSize: 18,
        fontWeight: '300',
        marginVertical: 10,
        lineHeight: 30,
    },
  
});

export default ProductDetailsScreens