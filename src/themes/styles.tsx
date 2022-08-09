import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_card_image: {
        width: 300,
        height: 420,
        marginHorizontal: 10,
    },
    card_image: {
        flex: 1,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    content_carousel: {
        height: 440,
    },
    content_flat_list: {
        height: 230,
        marginVertical: 16,
    },
    content_flat_list__title: {
        color: '#000',
        fontWeight: '600',
        fontSize: 25,
        marginBottom: 16,
    },
});

export default styles;
