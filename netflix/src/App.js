
import './App.css';
import Banner from './Companents/Banner';
import Navbar from './Companents/Navbar';
import MovieList from './Companents/MovieList';

function App() {
  return (
    <div className="app" style={{backgroundColor:"#141414"}}>
    <Navbar/>
    <Banner/>
    <MovieList/>
    </div>
  );
}

export default App;
