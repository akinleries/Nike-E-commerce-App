import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductsScreens from './screens/ProductsScreens';
import ProductDetailsScreens from './screens/ProductDetailsScreens';
import ShoppingCart from './screens/ShoppingCart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { selectNumberOfItems } from './store/cartSlice';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Navigation = () => {

    const numberOfItems = useSelector(selectNumberOfItems);



    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen name="Products" component={ProductsScreens}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{ fontWeight: '500', marginLeft: 10 }}>{numberOfItems}</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name="Product Details" component={ProductDetailsScreens} options={{ presentation: "modal" }} />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation