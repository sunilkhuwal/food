import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchUser = ({whatToSearch, onChangeOfWork}) => {
	return (
		<View>
			<TextInput style={styles.viewGround} 
			value={whatToSearch}
			onChangeText = {newText => onChangeOfWork(newText)}
			autoCapitalize="none"
			autoCorrect={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	viewGround: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 5
	}
});

export default SearchUser;
