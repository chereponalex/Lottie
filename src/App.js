import './App.css';
import animation from './lottie/133564-typing.json';
import Lottie from 'react-lottie';

function App() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          options={defaultOptions}
          style={{maxWidth: '400px'}}

        />
      </header>
    </div>
  );
}

export default App;
