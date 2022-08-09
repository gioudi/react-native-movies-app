import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interface/movieInterface';
import styles from '../themes/styles';
import { CardMovie } from './CardMovie';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={styles.content_flat_list}>
            <Text style={styles.content_flat_list__title}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <CardMovie width={100} height={180} movie={item} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            //showHorizontalScrollIndicator={false}
            />
        </View>
    );
};
