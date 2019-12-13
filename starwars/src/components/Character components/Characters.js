import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character'
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-wrap: wrap;
`;

export default function Characters() {

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(res => {
        setCharacters(res.data.results);
        // console.log(res.data.results)
      })
      .catch(err => console.log(err));
  }, []);
  console.log(characters);

  return (
    <Flex>
      {characters.map((character, index) => {
        return <Character key={index} height={character.height} mass={character.mass} name={character.name} gender={character.gender} birthYear={character.birth_year} skinColor={character.skin_color} hairColor={character.hair_color} />;
      })}
    </Flex>
  )
}