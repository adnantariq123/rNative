import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
} from "react-native";

import PokimonCard from "./components/PokimonCard";

export default ExerciseOne = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#f5f5f5",
            paddingTop: Platform.OS === "android" ? 25 : 0
        },
    });

    const charmanderData = {
        name: "Charmander",
        image: require("../../Pokimon/fireTail.png"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"],
    };

    const squirtleData = {
        name: "Squirtle",
        image: require("../../Pokimon/anime.png"), // Replace with the actual image path
        type: "Water",
        hp: 44,
        moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
        weaknesses: ["Electric", "Grass"],
    };

    const bulbasaurData = {
        name: "Bulbasaur",
        image: require("../../Pokimon/evil.png"), // Replace with the actual image path
        type: "Grass",
        hp: 45,
        moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    };

    const pikachuData = {
        name: "Pikachu",
        image: require("../../Pokimon/pikachu.png"), // Replace with the actual image path
        type: "Electric",
        hp: 35,
        moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
        weaknesses: ["Ground"],
    };

    return (
        // SafeAreaView works only on iOS
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <PokimonCard {...charmanderData} />
                <PokimonCard {...squirtleData} />
                <PokimonCard {...bulbasaurData} />
                <PokimonCard {...pikachuData} />
            </ScrollView>
        </SafeAreaView>
    );
};
