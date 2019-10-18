import React from 'react';
import styled from 'styled-components';
import Title from './components/title';
import PlayListDetails from './components/playlistDetails'
import PlayList from './components/playlist'
import InputSongPlayList from './components/inputSongPlaylist'
import CreatePlayList from './components/createPlaylist'

const Spotf4Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray ;
`

const Header =styled.div`
  width: 100%;
  background-color: orange;
  justify-content: center;
  align-items: center;
`
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
`

const SectionA = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  justify-content: space-between;
`
const SectionB = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  justify-content:space-between;
`

function App() {
  return (
    <Spotf4Container>
      <Header>
         <Title />
      </Header>
      <UserContainer>
          <SectionA>
            <PlayList />
            <CreatePlayList />
          </SectionA>
          <SectionB>
            <PlayListDetails />
            <InputSongPlayList />
          </SectionB>
      </UserContainer>
    </Spotf4Container>
  );
}

export default App;
