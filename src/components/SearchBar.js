import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ propForSearch, onTermChange, onSubmitTextData }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				placeholder="Search"
				style={styles.inputStyle}
				value={propForSearch}
				
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={newTerm => onTermChange(newTerm)}
				onSubmitEditing={onSubmitTextData}
				blurOnSubmit
			></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#F0EEEE',
		height: 50,
		marginHorizontal: 15,
		borderRadius: 10,
		flexDirection: 'row'
	},
	inputStyle: {
		//borderColor: 'black',
		//borderWidth: 1,
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15

	}
});

export default SearchBar;
