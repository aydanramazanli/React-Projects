import './App.css';
import QrCode from './companents/QrCode';
import Image from './companents/Image'
import Covid from './companents/Covid';

function App() {
  return (
    <div className="App" style={{ width:"80%", margin:"auto"}}>
        <Covid/>
  <QrCode/>
  <Image/>

    </div>
  );
}

export default App;
