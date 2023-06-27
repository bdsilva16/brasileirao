import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TeamEntity from '../entities/team_entity';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';



export default function HomePage({ navigation }) {
  //Linha do state
  const [teams, setTeam] = useState<TeamEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer live_99603d91274207183feb40d10cdbd7");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            victories: team['vitorias'],
            ties: team['empates'],
            defeats: team['derrotas'],
            last_games: team['ultimos_jogos']

          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TABELA DE TIMES</Text>
      <Text style={styles.psText}>PS</Text>

      <View style={styles.table}>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <TouchableOpacity onPress={() => {
              navigation.navigate('detail', team.item);
            }}>
              <View style={styles.item}>
                <Image style={styles.team_shield} source={team.item.team_shield_url} />
                <Text style={styles.team_position}>{team.item.position}</Text>
                <Text style={styles.team_name}>{team.item.team_name}</Text>
                {/* <Text style={styles.team_position}>{team.item.team_points}</Text> */}

              </View>
            </TouchableOpacity>
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6cb60',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
    color: '#df9000'
  },
  table: {
    backgroundColor: '#df9000',
    flex: 1,
    width: "90%",
    margin: 10,
    borderRadius:10

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingTop: 8,
    height: 60
  },
  team_shield: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  team_name: {
    fontSize: 20,
    width: 180,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  team_position: {
    width: 30,
    fontSize: 20,
    fontWeight: '700'
  },
  psText: {
    fontSize: 15,
    marginRight: 150,
    fontWeight: '700',
    color: '#df9000',
    marginTop: 20

  },

});
