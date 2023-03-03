import './assets/css/App.css';
import Navbar from './components/Navbar/Navbar';
import BookContainer from './components/Book/BookContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <BookContainer />
    </Provider>
  );
}

export default App;
