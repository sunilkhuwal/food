import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
//import SearchUser from '../components/SearchUser';

const SearchScreen = () => {
  const [sunil, setRakesh] = useState('');
  const [results, setResults] = useState([]);
  //const [myName, setMyName] = useState('');

  const yelpApi = async () => {
    const response = await yelp.get('/search', {
      params : {
        limit: 50,
        term: sunil,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
  }

  return (
    <View>
      <SearchBar propForSearch={sunil} onTermChange={newTerm => setRakesh(newTerm)} onSubmitTextData={yelpApi
      }/>
      <Text>Search Screen </Text>
      <Text >Going forward this is the new value: {sunil}</Text>
      <Text>So here comes the result of apis {results.length} </Text>

      {/* <SearchUser whatToSearch = {myName} onChangeOfWork = {newText => setMyName(newText)}/>
      <Text>This is custom output {myName}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
