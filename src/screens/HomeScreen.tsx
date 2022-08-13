import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';
import {Text, View, Button, ActivityIndicator, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CardMovie} from '../components/CardMovie';
import {useMovies} from '../hooks/useMovies';
import {Dimensions} from 'react-native';
import styles from '../themes/styles';

import {HorizontalSlider} from '../components/HorizontalSlider';
import {BackgroundGradient} from '../components/BackgroundGradient';

import {getCardColors} from '../helpers/getCardColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoad} = useMovies();

  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getCardColors(uri);

    setMainColors({primary, secondary});
  };
  if (isLoad) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <BackgroundGradient>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel Principal */}
          <View style={styles.content_carousel}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <CardMovie movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Top Movies  */}
          <HorizontalSlider title="Popular Movies" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};
