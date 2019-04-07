import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import ListaItens from './src/components/listaItens';



class catalogoProdutos extends Component {

  // constructor(props){
  //   super(props);
  //   console.log('Construindo a aplicacao');
  // }

  // componentWillMount(){
  //   console.log('Fazer alguma coisa antes de renderizar');

  // }

  // componentDidMount(){
  //   console.log('Fazer alguma coisa depois que carregar');
  // }

  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('catalogoProdutos', () => catalogoProdutos);
