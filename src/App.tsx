import React from 'react';
import { AppContainer } from './styles';
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

function App() {
  return (
      <AppContainer>
        <Column title="First Col">
          <Card text="First Card"/>
        </Column>
        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list"/>
      </AppContainer>
  )
}

export default App;
