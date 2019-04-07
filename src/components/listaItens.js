import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import Itens from './itens';
import axios from 'axios';
export default class ListaItens extends Component {

  constructor(props){
      super(props);

      this.state = {listaItens: []};
  }  

  componentWillMount(){
      //requisicao http
      axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response)=>{this.setState({listaItens: response.data}); })
      .catch(() => {console.log('Erro ao recuperar os dados')});
  }  

  render() {
    return (
      <ScrollView>  
        {this.state.listaItens.map((item) => {
           return(
                <Itens key={item.titulo} item={item} />
           );    
        })}
      </ScrollView>
    );
  }
}

