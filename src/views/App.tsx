import React, { useState } from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity as Touch,
} from 'react-native';

import router from '@/router';

export default () => {
    const [count, update] = useState(0);

    const onPress = e => {
        update(count + 1);
        router.push('home', )
    };

    return (
        <View style={styles.root}>
            <Text style={styles.text}>{count}</Text>
            <Touch
                activeOpacity={0.75}
                style={styles.touch}
                onPress={onPress}>
                <Text style={styles.touchText}>+ 1</Text>
            </Touch>
        </View>
    );
}

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
