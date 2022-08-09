import React, { useRef } from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';
export const FadeScreen = () => {
    const { fadeIn, fadeOut, opacity } = useFade();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F64',
                    width: 150,
                    height: 150,
                    opacity: opacity,
                    borderWidth: 10,
                    marginBottom: 15,
                }}
            />

            <View style={{ margin: 10 }}>
                <Button title="FadeIn" onPress={fadeIn} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="FadeOut" onPress={fadeOut} />
            </View>
        </View>
    );
};
