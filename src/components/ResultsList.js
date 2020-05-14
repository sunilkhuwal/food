import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
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

export default ResultsList;
