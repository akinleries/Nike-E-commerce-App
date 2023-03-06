import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const ShoppingCart = () => {

    const ShoppingCartTotals = () => (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>410,000 US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10,000 US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420,000 US$</Text>
            </View>
        </View>
    )

    return (
        <>
            <FlatList contentContainerStyle={{ marginTop: 40 }} data={cart} renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />

            <Button text="Checkout" />
        </>
    )
}

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
        gap: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    }
})

export default ShoppingCart

