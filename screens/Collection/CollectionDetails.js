import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    AsyncStorage,
    Dimensions, Image,
    Platform,
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';

import Gerais from './Item/Gerais'
import Fisicas from './Item/Fisicas'
import Opticas from './Item/Opticas'
import Quimicas from './Item/Quimicas'
import Cristalograficas from './Item/Cristalograficas'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/pt-br';

moment.tz.setDefault('Africa/Luanda');
moment.locale('pt-BR');

const resizeMode = 'center';
const { width } = Dimensions.get('window');
const height = width * 0.5;

class CollectionDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            refreshing: false,
            item: this.props.route.params.collection,
            index: 0, selectedTab: 'home', loading: false, GridViewItems: []
        };
    }
    formatDate = (date, format) => moment(date).format(format);

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
    render() {
        return (
            <View style={{ height: '100%' }}>
                    <View style={{ height: 200 }}>
                        <ScrollView style={styles.scrollContainer}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={true}>
                            {this.state.item.anexos.map(image => (
                                <Image style={styles.image} source={{ uri: image.data64 }} />
                            ))}
                        </ScrollView>
                    </View>
                <TabNavigator style={{ height: '100%' }}
                    tabBarStyle={{ backgroundColor: '#FFF', height: 62 }}
                    sceneStyle={{ paddingBottom: 60 }}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Gerais"
                        renderIcon={() => <Icon name="tags" size={25} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Gerais Item={this.state.item} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'fisicos'}
                        title="Físicos"
                        renderIcon={() => <Icon name="atom" size={25} />}
                        onPress={() => this.setState({ selectedTab: 'fisicos' })}>
                        <Fisicas Item={this.state.item} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'quimicos'}
                        title="Quimicos"
                        renderIcon={() => <Icon name="flask" size={25} />}
                        onPress={() => this.setState({ selectedTab: 'quimicos' })}>
                        <Quimicas Item={this.state.item} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'optico'}
                        title="Ópticos"
                        renderIcon={() => <Icon name="eye" size={25} />}
                        onPress={() => this.setState({ selectedTab: 'optico' })}>
                        <Opticas Item={this.state.item} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cristalograficos'}
                        title="Cristal"
                        renderIcon={() => <Icon name="adjust" size={25} />}
                        onPress={() => this.setState({ selectedTab: 'cristalograficos' })}>
                        <Cristalograficas Item={this.state.item} />
                    </TabNavigator.Item>
                </TabNavigator>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#FFF',
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 1,
        borderBottomColor: '#eee',
        height: '100%'
    },
    title: {
        justifyContent: 'flex-start',
        width: 120,
        textAlign: 'right',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        width: null
    },

    GridViewBlockStyle: {

        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 1,
        backgroundColor: '#00BCD4'

    },
    GridViewImageStyle: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
    ,

    GridViewInsideTextItemStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: '#fff',
        padding: 5,
        fontSize: 18,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'

    },


    scrollContainer: {

    },
    image: {
        width,

    }

});

export default CollectionDetails;
