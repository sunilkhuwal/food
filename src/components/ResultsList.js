import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultShowScreen", { Id: item.id });
              }}
            >
              <ResultDetail result={item} Id={item.id} />
            </TouchableOpacity>
          );
        }}
      />
      {/* <Text>Results: {results.length}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList);
