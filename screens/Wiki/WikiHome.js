import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

class WikiHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            wikis: []
        };
       // alert(this.props.navigation.navigate("wikiDetails",{wiki:'item'}))
    }
        
    componentDidMount() {
        this.getData()
    }
    getData() {
        debugger
        this.setState({ refreshing: true })
        //Service to get the data from the server to render
        fetch('http://192.168.100.17:7000/api/wikis/')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ wikis: json.sort((a,b)=>a.title>b.title), refreshing: false })
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
            <View style={styles.container}>
                <FlatList
                style={{flex:1}}
                data={this.state.wikis}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate("wikiDetails",{wiki:item})}>
                            <Text style={{fontWeight:"bold", fontSize:18}}>{item.title}</Text>
                            <View style={{ flexDirection:"row" }}>
                            {item.tags.map(tag => {
                                return (
                                <View style={styles.buttonStyle}>
                                    <Text style={{color:'#FFF', fontSize:9}}>{tag.title}</Text>
                                </View>)
                                })
                            }
                            </View>
                            </TouchableOpacity>
                        </View>
                )}
                keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

function Item({ item , navigation}) {
    return (
      <View style={styles.listItem}>
      <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("WikiDetails",{wiki:item})}>
          <Text style={{fontWeight:"bold", fontSize:18}}>{item.title}</Text>
          <View style={{ flexDirection:"row" }}>
          {item.tags.map(tag => {
            return (
            <View style={styles.buttonStyle}>
                <Text style={{color:'#FFF', fontSize:9}}>{tag.title}</Text>
            </View>)
            })
          }
        </View>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      marginTop:60
    },
    listItem:{
      margin:10,
      marginTop: 5,
      marginBottom: 5,
      padding:10,
      backgroundColor:"#FFF",
      //width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5
    },
    buttonStyle:{
        margin: 2,
        padding: 2,
        backgroundColor: '#555'
    }
  });

export default WikiHome;
