import { View, Text, StyleSheet, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import products from '../data/products';
import React from 'react'

const ProductDetailsScreens = () => {

    const product = products[0];
    const { width } = useWindowDimensions();

    return (

        <View>
            <ScrollView>
                <FlatList data={product.images} renderItem={({ item }) => (
                    <Image source={{ url: item }} style={{ width, aspectRatio: 1 }} />
                )} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />

                <View style={{ padding: 20 }}>

                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>

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
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100
    },
    buttonText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16

    }
});

export default ProductDetailsScreens