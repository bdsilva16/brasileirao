import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';




export default function DetailPage({ route, navigate }) {
    const { team_name, team_shield_url, victories, defeats, ultimos_jogos } = route.params;
    console.log(team_name)

    return (

        <View style={styles.container}>
            <Image style={styles.team_shield} source={team_shield_url} />
            <Text style={styles.team_name}>{team_name}</Text>

            <Text style={styles.psText}>Vitórias</Text>
            <Text style={styles.team_name}>{victories}</Text>

            <Text style={styles.psText}>Derrotas</Text>
            <Text style={styles.team_name}>{defeats}</Text>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginBottom: 16,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    team_name: {
        fontSize: 20,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20
    },
    team_shield: {
        width: 100,
        height: 100,
        marginRight: 15,
        marginTop: 30
    },
    psText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#df9000',
        marginTop: 20



    },
})