import React from 'react';
import { Text, FlatList, View } from 'react-native';

import { MovieCredits, MovieFull } from '../interface/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: MovieCredits;
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text style={{ marginLeft: 20 }}>{movieFull.release_date}</Text>
                    {
                        <Text>
                            - {movieFull.genres.map(genre => genre.name).join(', ')}
                        </Text>
                    }
                </View>

                {/* Story */}
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Description</Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
                {/* Story */}
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Budget</Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            {/* Casting */}

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text
                    style={{
                        fontSize: 23,
                        marginTop: 10,
                        fontWeight: 'bold',
                        marginHorizontal: 20,
                    }}>
                    Actors
                </Text>
                <FlatList
                    data={cast}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <CastItem actors={item} />}
                />
            </View>
        </>
    );
};
