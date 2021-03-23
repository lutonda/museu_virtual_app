import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import { Col, Row, Grid } from "react-native-easy-grid";

class CollectionHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            collections: []
        };
    }

    componentDidMount() {
        this.getData()
    }
    getData() {
        
        this.setState({ refreshing: true })
        //Service to get the data from the server to render
        fetch('http://192.168.100.17:7000/api/collections/', {

            headers: {
                //'Accept': 'application/json',
                'content-Type': 'application/json',
                'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'apikey': 'newapikeyforuseb',
                'X-AUTH-TOKEN': 123,

            }
        })
            .then((response) => response.json())
            .then((json) => {
                //alert(JSON.stringify(json))
                this.setState({ collections: json, refreshing: false })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    showAlert() {
        alert('Button Clicked and Called from outside!');
    }

    render() {
        return (
            <View style={{flex:1}}>
                {this.state.refreshing  ? <ActivityIndicator /> :
                    <FlatGrid
                        refreshControl={
                            <RefreshControl
                                onRefresh={this.getData}
                            />
                        }
                        itemDimension={130}
                        data={this.state.collections}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        spacing={10}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("collectionDetails",{collection:item})}>
                                <ImageBackground source={{ uri: item.anexos[0].data64 }} style={styles.imageBackground}>
                                    <View style={[styles.itemContainer]}>
                                        <Text style={styles.itemName}>{item.nome}</Text>
                                        <Text style={styles.itemCode}>{item.idcategoria.nome} - {item.idcategoria.dependencia.nome}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                    />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default CollectionHome;
