
import './App.css';
import Banner from './Companents/Banner';
import Navbar from './Companents/Navbar';
import MovieList from './Companents/MovieList';
import Footer from './Companents/Footer';

function App() {
  return (
    <div className="app" style={{backgroundColor:"#141414"}}>
    <Navbar/>
    <Banner/>
    <MovieList/>
    <Footer/>
    </div>
  );
}

export default App;
