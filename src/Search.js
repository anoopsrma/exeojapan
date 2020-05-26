import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Details, Search2 } from "./Screen";

const ScreenContainer = ({ children }) => (
    <View>{children}</View>
);

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63a',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s',
        title: 'Third Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63f',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72f',
        title: 'Third Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63s',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7g2',
        title: 'Third Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97rf63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29dr72',
        title: 'Third Item',
    },
];

function Item({ }) {
    return (
        <View style={styles.item}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '35%', height: '100%', backgroundColor: '#fff' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: 'https://fdn.gsmarena.com/imgroot/news/20/05/redmi-10x-30x-zoom-night-sample/-640/gsmarena_002.jpg' }}
                    />
                </View>
                <View style={{ width: '65%', height: '100%', backgroundColor: '#fff' }}>
                    <Text style={{ fontSize: 16, paddingHorizontal: 10, paddingTop: 5, alignSelf: 'flex-start' }}>おはようございます</Text>
                    <Text style={{ fontSize: 16, paddingHorizontal: 10, paddingTop: 5, alignSelf: 'flex-start' }}>おはようございます</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '18%', height: '100%', backgroundColor: '#fff' }}>
                            <TouchableOpacity style={styles.navBarLeftButton}>
                                <MaterialCommunityIcons name="gender-male" color={'white'} size={25} backgroundColor={'blue'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '32%', height: '100%', backgroundColor: '#fff' }}>
                            <Text style={{fontSize:14, marginTop:40}}>おはようご</Text>
                        </View>
                        <View style={{ width: '18%', height: '100%', backgroundColor: '#fff' }}>
                            <TouchableOpacity style={styles.navBarRightButton}>
                                <MaterialCommunityIcons name="gender-female" color={'white'} size={25} backgroundColor={'blue'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '32%', height: '100%', backgroundColor: '#fff' }}>
                        <Text style={{fontSize:14, marginTop:40}}>おはようご</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}

export const Search = ({ navigation }) => (
    <ScreenContainer>
        <FlatList
            data={DATA}
            navigation = {navigation}
            renderItem={({item }) => <TouchableOpacity onPress={() => navigation.push("SearchDetail")}><Item title={item.title} /></TouchableOpacity>}
            keyExtractor={item => item.id}
        />
    </ScreenContainer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    navBarLeftButton: {
        borderRadius: 60,
        backgroundColor: '#0573bd',
        padding: 2,
        margin:10,
        marginTop: 35,
        width:30
      },
      navBarRightButton: {
        borderRadius: 60,
        backgroundColor: '#ee82b1',
        padding: 2,
        margin:10,
        marginTop: 35,
        width:30
      },
    item: {
        height: 150,
        backgroundColor: '#fff',
        padding: 4,
        marginVertical: 2,
        marginHorizontal: 6,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        height: '100%',
        borderRadius: 0
    },
});
