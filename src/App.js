import React from 'react';
import { Provider } from 'react-redux';
import store from './store';


import PlayList from './componentes/playlist/index';
import Play from './componentes/play/index';



const App = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Provider store={ store }>
           <PlayList />
           <Play />
           <br/><br/>
           <br/><br/>
      </Provider>

     
    </div>
  )
}

export default App