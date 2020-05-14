import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const customData = require("../mockJson/businessResponse.json");

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price = {'$' || '$$' || '$$$'}
    return results.filter(result => {
      console.log('----> ' + result.price) ;
      return result.price !== undefined && result.price === price;
    });
  }

  return (
    <View>
      <SearchBar
        propForSearch={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onSubmitTextData={() => searchApi(term)}
      />
      <Text>Search Screen </Text>
      {errorMessage ? <Text>{errorMessage}</Text> : <Text>Going forward this is the new value: {term}</Text>}
      <Text>So here comes the result of apis {results.length} </Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Big Pricier' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
