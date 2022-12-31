import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        {/* <h4>Restaurant application</h4> */}
        <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/Viewrestaurant/:id' element={<Viewrestaurant/>}/>

        </Routes>
        
        <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
