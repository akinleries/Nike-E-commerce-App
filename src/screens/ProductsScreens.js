import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import products from "../data/products";
import React from 'react'

const ProductsScreens = () => {
    return (

        <FlatList data={products} renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
        )} numColumns={2} />

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: "50%",
        padding: 1,
    },

    image: {
        width: "100%", aspectRatio: 1
    }
});

export default ProductsScreens