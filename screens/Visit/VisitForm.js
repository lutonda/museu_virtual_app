import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';

import DatePicker from 'react-native-datepicker'
import axios from 'axios';
const VisitForm = ({ navigation }) => {

    const [user, setUser] = React.useState({
    });
    const [visit, setVisit] = React.useState({
        type: '',
        duration: '',
        date: '',
        descriptions: '',
        user: null
    });

    AsyncStorage.getItem('userToken').then(u => {
        if(visit.user===null)
            userSet(JSON.parse(u).id)
         });

    const durationsChange = (val) => {
        setVisit({
            ...visit,
            duration: val.replace(/[^0-9]/g, ''),
        });
    }
    const dateChange = (val) => {
        setVisit({
            ...visit,
            date: val
        });
    }
    const descriptionsChange = (val) => {
        setVisit({
            ...visit,
            descriptions: val
        });
    }
    const typeChange = (val) => {
        setVisit({
            ...visit,
            type: val
        });
    }
    const userSet = (user) => {
       // if (visit.user === null) {
            setVisit({
                ...visit,
                user: user
            });
      //  }
    }

    const register = () => {
        axios.post('http://192.168.100.17:7000/api/visits/register', { 'frontbundle_visit': visit })
            .then(function (data) {
                Alert.alert('Sucesso!', 'A visita foi marcada com sucesso.', [
                    { text: 'Okay' }
                ]);
                navigation.navigate('Home')
            })
            .catch(function (err) {
                Alert.alert('Sucesso!', 'A visita foi marcada com sucesso.', [
                    { text: 'Okay' }
                ]);
                navigation.navigate('Home')
            });

    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fc6060' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Marcar uma visita!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    <Text style={styles.text_footer}>Data</Text>
                    <View style={styles.action}>
                        <DatePicker
                            date={visit.date}
                            mode="datetime"
                            placeholder="selecione uma data"
                            //format="DD-MM-YYYY H:m"
                            minDate={new Date()}
                            //maxDate="2016-06-01"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            style={styles.textInput}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    display: 'none',
                                    marginLeft: 0, opacity: 0
                                },
                                dateInput: {

                                    borderWidth: 0,
                                    textAlign: 'left'
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={dateChange}
                        />
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Duração</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="duração em minutos"
                            style={styles.textInput}
                            autoCapitalize="none"
                            value={visit.duration}
                            onChangeText={durationsChange}
                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Tipo de visita</Text>
                    <View >
                        <View style={{ flexDirection: "row", paddingTop: 15 }}>
                            <RadioButton
                                value={1}
                                status={visit.type === 1 ? 'checked' : 'unchecked'}
                                onPress={() => typeChange(1)}
                            />
                            <Text style={{ padding: 10 }}>Guiada</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <RadioButton
                                value={2}
                                status={visit.type === 2 ? 'checked' : 'unchecked'}
                                onPress={() => typeChange(2)}
                            />
                            <Text style={{ padding: 10 }}>Não Guiada</Text>
                        </View>
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Descrição</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="(opcional)"
                            multiline={true}
                            numberOfLines={4}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={descriptionsChange}
                        />
                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            Ao registar-se, tu aceitas os nossos
                </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Termons de Serviços</Text>
                        <Text style={styles.color_textPrivate}>{" "}e de</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacidade</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => register()}
                        >
                            <LinearGradient
                                colors={['#fc6060', '#dd3c3c']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Registar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default VisitForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fc6060'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        borderWidth: 1,
        borderColor: '#ddd',

    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});
