import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../interface/movieInterface';
import styles from '../themes/styles';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const CardMovie = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
                paddingBottom: 20,
                paddingHorizontal: 5,
            }}>
            <View
                style={{
                    width,
                    height,
                }}>
                <Image source={{ uri }} style={styles.card_image} />
            </View>
        </TouchableOpacity>
    );
};
