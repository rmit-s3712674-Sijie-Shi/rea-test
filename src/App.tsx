import { useState } from 'react';
import style from './App.module.css';
import ItemList from './components/item-list/ItemList';
import properties from './data/testData.json'
import { PropertyResult } from './types/Property'


function App() {
  const propertyInfo = properties
  const [state, setState] = useState(propertyInfo)

  const saveItem = (id: string) => {

  }

  const deleteItem = (id: string) => {

  }
  console.log(state)
  return (
    <>
    <div className={style.mainPagelists}>
    <div className={style.columns}>
    <ItemList result={state.results} buttonType="Results" buttonFunction={saveItem}/>
    <ItemList result={state.saved} buttonType="Saved" buttonFunction={deleteItem}/>
    </div>
    </div>
    </>
  );
}

export default App;
