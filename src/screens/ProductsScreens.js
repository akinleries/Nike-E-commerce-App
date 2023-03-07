import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import React from 'react'

const ProductsScreens = ({ navigation }) => {

    const { products } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    return (

        <FlatList data={products} renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => {
                    dispatch(productsSlice.actions.setSelectedProduct(item.id))
                    navigation.navigate("Product Details")
                }}
                style={styles.itemContainer}>
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