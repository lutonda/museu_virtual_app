import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import { Col, Row, Grid } from "react-native-easy-grid";

import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/pt-br';
import { AuthContext } from '../../components/context';

moment.tz.setDefault('Africa/Luanda');
moment.locale('pt-BR');
class EventPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            events: [{}]
        };
    }

    componentDidMount() {
        this.getData()
    }
    getData() {
        this.setState({ refreshing: true })
        //Service to get the data from the server to render
        fetch('http://192.168.100.17:7000/api/events/')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ events: json, refreshing: false })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getLastShedule(shedules){
        return shedules.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })[0];
    };
    formatDate = (date, format) => moment(date).format(format);
    showAlert() {
        alert('Button Clicked and Called from outside!');
    }

    render() {
        return (
            <Grid>
                <Row size={1}>
                    <ImageBackground source={{ uri: 'http://192.168.100.17:7000/uploads/brochures/covers/' + this.state.events[0].cover }} style={styles.imageBackground}>
                        <View style={[styles.itemContainer]}>
                            <Text style={styles.itemName}>{this.state.events[0].title}</Text>
                            <Text style={styles.itemCode}>{this.state.events[0].code}</Text>
                        </View>
                    </ImageBackground>

                </Row>

                <Row size={2}>

                    {this.state.refreshing ? <ActivityIndicator /> : null}
                    <FlatGrid

                        refreshControl={
                            <RefreshControl
                                onRefresh={this.getData}
                            />
                        }
                        itemDimension={130}
                        data={this.state.events}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        spacing={10}
                        renderItem={({ item }) => (
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Eventi",{event:item})}>
                            <ImageBackground source={{ uri: 'http://192.168.100.17:7000/uploads/brochures/covers/' + item.cover }} style={styles.imageBackground}>
                                
                                <View style={[styles.buttonStyles]}>
                                {item.shedules && item.shedules.length > 0 ?
                                   <View> 
                                    <Text style={{}}>{this.formatDate(this.getLastShedule(item.shedules).date, "D/MM/Y")}</Text>
                                    <Text style={{fontSize:42}}>{this.formatDate(this.getLastShedule(item.shedules).date, "HH:mm")}</Text>
                                    </View>
                                :<Text>BREVEMENTE</Text>}
                                </View>
                                <View style={[styles.itemContainer]}>
                                    <Text style={styles.itemName}>{item.title}</Text>
                                    <Text style={styles.itemCode}>{item.code}</Text>
                                </View>
                            </ImageBackground>
                            </TouchableOpacity>
                        )}
                    />
                </Row>
            </Grid>

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
        height: 100,
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
    },
    buttonStyles: {
        backgroundColor:'rgba(255,255,255,0.8)',
        paddingVertical: 10,
        width: '60%',
        marginLeft:5,
        marginTop:-3,
       // borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 10,
        minHeight:80,
        width:100
      }
});

export default EventPage;
