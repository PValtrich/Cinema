import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmes from '../../Listas/cinemas'; // Importando lista de filmes

export default function Cinema() {
  const navigation = useNavigation();

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
      <Text style={{ color: '#000' }}>ESCOLHA O CINEMA</Text>
      </View>
      <View style={estilo.body}>
        <View style={estilo.list}>
          <View style={estilo.cinemaname}>
          <Text style={{ color: '#000', fontSize: 15 }}>CINEMA 1</Text>
          </View>
          <View style={estilo.conteudo}>
            <View style={estilo.viewEsquerda}>
              <Image
              style={estilo.cartaz}
              source={require('../../../assets/Ação/Alfa.jpg')}
              />
            </View>
            <View style={estilo.viewDireita}>
              <View style={estilo.cima}>
              <Text style={{ color: '#000', fontSize: 15 }}>ALFA</Text>
              </View>
              <View style={estilo.meio}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#fff' }}>2016</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>18</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#fff' }}>1h30</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#fff' }}>Ação</Text>
              </View>
              </View>
              <ScrollView style={estilo.baixo}>
                <Text>Há 20.000 anos, em plena Era do Gelo, um jovem foi ferido durante uma caçada e seus companheiros partiram, pensando que ele estava morto. O jovem acorda e encontra um lobo que foi abandonado. O homem e o lobo tentam sobreviver juntos.</Text>
              </ScrollView>
            </View>
          </View>
        </View>        
      </View>
    <View style={estilo.nav}>
      <View style={estilo.iconav}>
        <Icon
          name='theaters'
          size={30}
          onPress={() => navigation.navigate('Filme')}
        />
        <Text style={{ fontSize: 10 }}>FILMES</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='search'
          size={30}
          onPress={() => navigation.navigate('Pesquisar')}
        />
        <Text style={{ fontSize: 10 }}>Pesquisar</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='movie'
          size={30}
          color={'#14FF00'}
          onPress={() => navigation.navigate('Cinemas')}
        />
        <Text style={{ fontSize: 10,color: '#14FF00'}}>CINEMAS</Text>
      </View>

      <View style={estilo.iconav}>
        <Icon
          name='person'
          size={30}
        />
        <Text style={{ fontSize: 10}}>PERFIL</Text>
      </View>
    </View>
    </View>
  );
}
