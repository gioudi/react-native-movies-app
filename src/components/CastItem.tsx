import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Cast } from '../interface/movieInterface';

interface Props {
    actors: Cast;
}

export const CastItem = ({ actors }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actors.profile_path}`;
    return (
        <View style={styles.containerCastItem}>
            {actors.profile_path && (
                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10, marginRight: 15 }}
                />
            )}

            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actors.name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{actors.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCastItem: {
        flexDirection: 'row',
        shadowColor: '#000',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 5,
        marginHorizontal: 5,
    },
});
