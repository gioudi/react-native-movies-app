import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interface/movieInterface';

export type RootStackParams = {
    Home: undefined;
    Detail: Movie;
    Setting: undefined;
    Profile: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Detail" component={DetailScreen} />
        </Drawer.Navigator>
    );
};
