import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import pokemonList from "./data.json";

import Header from "./assets/components/FlatList/Fgreeter"

export default function PokiApp() {
  const Styles = StyleSheet.create({
    container: {
      padding: 30,
      backgroundColor: "#666",
    },
    nameHolder: {
      //marginBottom: 10, // lets get ride of the marginBottom becuase we are getting fancy and using ItemSeparatorComponent
      borderRadius: 8,
      borderWidth: 4,
      borderColor: "#333",
      backgroundColor: "#fff",
      padding: 10,
    },
    name: {
      fontSize: 20,
    },
    noItemsFound : {
      //textAlign:"center",
      fontSize:35,
      color: "red",     
    },
    CenterMe :{
      justifyContent:"center",
      alignItems: "center",
      alignContent:"center",
      borderWidth: 4,
      borderColor: "#333",
      flex:1
    }
  });

  return (
    <>
      <SafeAreaView>
        {/* <ScrollView>
          <View style={Styles.container}>
            {pokemonList.map((poki) => {
              
              return (
                <View key={poki.id} style={Styles.nameHolder}>
                  <Text style={Styles.name}>{poki.name}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView> 
        this is lazy loaded
        Flatlist component renders only the items currently in view, making it highly performant for long lists which might have thousands of stuff.
        */}

        <FlatList
          data={pokemonList} // to turn on ListEmptyComponent comment this line out
          //data={[]}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={Styles.nameHolder}>
                <Text style={Styles.name}>{item.name}</Text>
              </View>
            );
          }}
          //keyExtractor={} tells the list to use the ids for the react keys instead of the default key property.

          //horizontal this is ok!

          // think of ItemSeparatorComponent as the :before and :after of a div -  need to find a way to better center shit
          ItemSeparatorComponent={
            <View
              style={{
                height: 10,
                backgroundColor: "plum",
                width: "50%",
                left: "25%",
              }}
            />
          }

          ListEmptyComponent={<View style={Styles.CenterMe}><Text style={Styles.noItemsFound}> No items found :-(</Text></View>}
          ListHeaderComponent={<Header/>}
          //ListFooterComponent 
        /> 
        {/* FlatList ends here! */}
        
      </SafeAreaView>
    </>
  );
}
