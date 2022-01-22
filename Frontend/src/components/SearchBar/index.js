import React,{useState} from 'react'
// import { View, Text } from 'react-native'
import { Container, TextField, SearchIcon} from './styles/searchBar'


const SearchBar = () => {
    const [search,setSearch]=useState('');
    return (
        <Container>
            <TextField onChangeText={setSearch} value={search} placeholder="Search Anything" placeholderTextColor={'#708090'}/>
            {/* <SearchIcon>
                <MaterialCommunityIcon name="emoticon-cool-outline" size={16}/>
            </SearchIcon> */}
        </Container>
    )
}

export default SearchBar
