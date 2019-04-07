import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}> 
        <View style={styles.foto}>
            <Image style={{height: 100, width:100}} source={{uri: this.props.item.foto}}/>
        </View>
        <View style={styles.datalhes_itens}>   
            <Text style={styles.titulo}>{this.props.item.titulo}</Text>
            <Text style={styles.valor}>R$ {this.props.item.valor}</Text>
            <Text>Local: {this.props.item.local_anuncio}</Text>
            <Text>Anunciado em: {this.props.item.data_publicacao}</Text>
        </View> 
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },

    foto: {
        width: 102,
        height: 102
    },
    datalhes_itens: {
        marginLeft: 10,
        flex: 1
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    valor:{
        fontSize: 15,
        color: '#008000'
    }
})