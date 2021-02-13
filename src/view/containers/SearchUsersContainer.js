import React,{useEffect} from 'react';
import styled from 'styled-components';
import {searchUserActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import UsersList from "../components/SearchUsers/UsersList";

const SearchUsersContainer = ({match}) => {

    const query = match.params.query

    useEffect(() => {
        SearchResult();
    },[query])

    const SearchResult = () => {
        searchUserActions.SearchUsers({
            query,
            per_page:12
        })
    }

    const {UsersResults} = useSelector(state => state.searchUsers)

    return(
        <Container className={"SearchUsersContainer"}>
            <UsersList users={UsersResults.results}/>
        </Container>
    )
}

const Container = styled.div`

`;



export default SearchUsersContainer;