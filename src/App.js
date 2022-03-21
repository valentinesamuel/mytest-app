import Navbar from './components/Navbar'
import './App.scss';
import Hero from './components/Hero';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="search-bar">
        <p className="bar-title">Search</p>
        <input className='search-bar' label="Search" type="text" />
      </div>
      <Category />
      <Category />
    </div>
  );
}

export default App;
