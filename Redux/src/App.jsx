import { Provider } from 'react-redux';
// import { store } from './state/store';
import { store } from './state/store.js';


import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
