import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";
import { useSelector } from 'react-redux';
import { selectSubtotal, selectDeliveryPrice, selectTotal } from '../store/cartSlice';

const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subtotal.toLocaleString()} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee.toLocaleString()} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total.toLocaleString()} US$</Text>
            </View>
        </View>
    )
}

const ShoppingCart = () => {
    const cartItem = useSelector((state) => state.cart.items);

    return (
        <>
            <FlatList data={cartItem} renderItem={({ item }) => <CartListItem cartItem={item} />}
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

