import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    AsyncStorage,
    Dimensions, Image,
    Platform,
} from 'react-native'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/pt-br';

moment.tz.setDefault('Africa/Luanda');
moment.locale('pt-BR');

const resizeMode = 'center';
const { width } = Dimensions.get('window');
const height = width * 0.5;

class Cube extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            refreshing: false,
            //item: this.props.route.params.collection,
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

export default Cube;
