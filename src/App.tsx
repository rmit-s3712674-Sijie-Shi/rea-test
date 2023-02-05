import { useState, createContext } from 'react';
import style from './App.module.css';
import ItemList from './components/item-list/ItemList';
import properties from './data/testData.json'


export const Savedinformation = createContext<any>(null);

function App() {
  const propertyInfo = properties
  const [state, setState] = useState(propertyInfo)

  /**
   * 
   * @param id 
   * @returns hook function to store target property with certain ID in saved column
   */
  const saveItem = (id: string) => {
    const property = state.results.find(res => res.id === id)
    if (property) return setState({ ...state, saved: [...state.saved, property] })
    alert("Illegal item selected")
  }

  /**
   * 
   * @param id 
   * @returns hook function to remove target property from saved column
   */
  const deleteItem = (id: string) => {
    const property = state.saved.find(res => res.id === id)
    if (property) return setState({ ...state, saved: state.saved.filter(res => res.id !== id) })
    alert("Illegal item selected")
  }

  return (
    <>
      <div className={style.columns}>
        <Savedinformation.Provider value={{ state }}>
          <ItemList result={state.results} buttonType="Results" buttonFunction={saveItem} />
          <ItemList result={state.saved} buttonType="Saved" buttonFunction={deleteItem} />
        </Savedinformation.Provider>
      </div>
    </>
  );
}

export default App;
