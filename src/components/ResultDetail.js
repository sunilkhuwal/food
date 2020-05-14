import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={{ fontWeight: "bold", marginTop: 4 }}>{result.name}</Text>
      <Text>
        Rating: {result.rating} Review: {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 200,
    width: 300,
    borderRadius: 10,
  },
});

export default ResultDetail;
