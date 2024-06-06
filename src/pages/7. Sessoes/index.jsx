import React from 'react';
import { View, Text, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmecinemas from '../../Listas/FilmesCinemas'; // Importe a lista de filmes e cinemas

export default function Sessao() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={estilo.inform}>
      <View style={estilo.informup}>
        <Text style={{ color: '#fff' }}>{item.nome}</Text> {}
      </View>
      <View style={estilo.informdown}>
        <View style={estilo.esquerda}>
          <Text style={{ color: '#fff' }}>{item.horario}</Text> {/* Horário da sessão */}
          <Text style={{ color: '#fff' }}>{item.legendado ? 'Legendado' : 'Dublado'}</Text> {/* Legendado ou Dublado */}
        </View>
        <View style={estilo.direita}>
          <Icon
            name='delete'
            size={30}
            color={'#fff'}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>HISTÓRICO DE SESSÕES</Text>
      </View>
      <View style={estilo.body}>
        <FlatList
          data={filmecinemas}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10 }}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10 }}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}
