import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function DetailPage({ route, navigate }) {
    const { team_name, team_shield_url, victories, defeats, last_games, ties } = route.params;
    console.log(team_name);


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.team_shield} source={team_shield_url} />
                <Text style={styles.team_name}>{team_name}</Text>
            </View>

            <View style={styles.containerInfo}>
                <View style={styles.infoContainer}>
                    <Text style={styles.psText}>Vitórias</Text>
                    <Text style={styles.team_name}>{victories}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.psText}>Derrotas</Text>
                    <Text style={styles.team_name}>{defeats}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.psText}>Empates</Text>
                    <Text style={styles.team_name}>{ties}</Text>
                </View>
            </View>

            <Text style={styles.psText}>Ultimos Jogos</Text>
            <Text style={{ fontSize: 24, fontWeight: '700', letterSpacing: 20, marginTop:10 }}>{last_games}</Text>
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
        borderRadius: 10,

    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom:40
    },
    infoContainer: {
        alignItems: 'center',
    },
    team_name: {
        fontSize: 24,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    team_shield: {
        width: 100,
        height: 100,
    },
    psText: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 30,
    },
    card: {
        backgroundColor: '#af5b11',
        width: '36%',
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'black',
        elevation: 15,
        shadowColor: '#black',
        marginBottom: 20,
    },
});
