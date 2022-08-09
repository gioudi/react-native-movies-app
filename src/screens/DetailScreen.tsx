import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import { Navigation, RootStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';

import { MovieDetails } from '../components/MovieDetails';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

export const DetailScreen = ({ route, navigation }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.detailImageContainer}>
                <View style={styles.detailImageBorder}>
                    <Image source={{ uri }} style={styles.detailCardImage} />
                </View>
                <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
                    <Text style={styles.title}>{movie.original_title}</Text>
                    <Text style={styles.subTitle}>{movie.title}</Text>
                </View>
            </View>

            {isLoading ? (
                <View style={{ marginHorizontal: 10 }}>
                    <ActivityIndicator size={30} color="grey" />
                </View>
            ) : (
                <View style={{ marginHorizontal: 10 }}>
                    <MovieDetails movieFull={movieFull!} cast={cast} />
                </View>
            )}

            {/* Back Button */}

            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon color="white" name="arrow-back-outline" size={60} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    detailImageContainer: {
        width: '100%',
        flex: 1,
        height: screenHeight * 0.7,
        shadowColor: '#000',
        textAlign: 'center',

        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    detailImageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    detailCardImage: {
        flex: 1,
    },

    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        marginVertical: 8,
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    },
});
