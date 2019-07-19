import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => (
    <View style={styles.root}>
        <Text style={styles.text}>Hello</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
    touch: {
        padding: 12,
        width: 100,
        backgroundColor: '#39f',
        borderRadius: 10,
        marginTop: 16,
    },
    touchText: {
        textAlign: 'center',
        color: '#fff',
    },
});
