import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [sunil, setRakesh] = useState('');
  
  return (
    <View>
      <SearchBar propForSearch={sunil} onTermChange={newTerm => setRakesh(newTerm)} onSubmitTextData={newTerm => {
        console.log('Submit was called'+ newTerm);
      }
      }/>
      <Text>Search Screen </Text>
      <Text >Going forward this is the new value: {sunil}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
