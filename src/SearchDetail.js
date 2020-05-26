import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Carousel from './Carousel'
import { dummyData } from './Data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenContainer = ({ children }) => (
    <View>{children}</View>
);

export const SearchDetail = ({ navigation }) => (
    <View>
        <Carousel data={dummyData} />
        <Text style={{ padding: 20, fontSize: 16, fontWeight: 'bold' }}>アプリのデモはネイティブテキストを反応させます</Text>
        <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: 'bold' }}>ネット予約→ブラウザでパーティー詳細ページを開き予約へつなげます</Text>
        <View
            style={{
                padding: 5,
                borderBottomColor: '#E7EAED',
                borderBottomWidth: 1,
            }}
        />
        <View style={styles.badgeContainer}>
            <Text style={styles.badge}>おはようご</Text>
            <Text style={styles.badge}>おはようごおはよ</Text>
        </View>
        <View
            style={{
                borderBottomColor: '#E7EAED',
                borderBottomWidth: 1,
                marginTop: 60
            }}
        />
        <View style={styles.badgeContainer}>
            <Text style={styles.badge}>おはようご</Text>
            <Text style={styles.badge}>おはようごおはよ</Text>
        </View>
        <View
            style={{
                borderBottomColor: '#E7EAED',
                borderBottomWidth: 1,
                marginTop: 60
            }}
        />
        <View style={styles.badgeContainer}>
            <Text style={styles.badge2}>おはようご</Text>
            <TouchableOpacity style={styles.navBarLeftButton}>
            <MaterialCommunityIcons name="gender-male" color={'white'} size={25} backgroundColor={'blue'} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, marginTop: 20 }}>おはようご</Text>
            <TouchableOpacity style={styles.navBarRightButton}>
            <MaterialCommunityIcons name="gender-female" color={'white'} size={25} backgroundColor={'blue'} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, marginTop: 20 }}>おはようご</Text>
        </View>
        <View
            style={{
                borderBottomColor: '#E7EAED',
                borderBottomWidth: 1,
                marginTop: 60
            }}
        />
        <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>ネット予約→ブラウザでパーティー詳細ページを開き予約へつなげます</Text>
    </View>
)

const styles = StyleSheet.create({
    badgeContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:10
    },
    badge: {
        padding: 20,
        width: '50%'
    },
    badge2: {
        padding: 20,
        width: '30%'
    },
    navBarLeftButton: {
        borderRadius: 60,
        backgroundColor: '#0573bd',
        padding: 1,
        margin: 10,
        width: 30
    },
    navBarRightButton: {
        borderRadius: 60,
        backgroundColor: '#ee82b1',
        padding: 2,
        margin: 10,
        width: 30
    },
})
