import React from 'react';
import { AppContainer } from './styles';
import {Column} from "./Column";
import {Card} from "./Card";
function App() {
  return (
      <AppContainer>
        <Column title="First Col">
          <Card text="First Card"/>
        </Column>
      </AppContainer>
  )
}

export default App;
