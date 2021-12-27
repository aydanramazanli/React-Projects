import './App.css';
import QrCode from './companents/QrCode';
import Image from './companents/Image'
import Covid from './companents/Covid';

function App() {
  return (
    <div className="App" style={{display:"flex", width:"80%", justifyContent:"space-between", margin:"auto"}}>
  <QrCode/>
  <Image/>
  <Covid/>
    </div>
  );
}

export default App;
