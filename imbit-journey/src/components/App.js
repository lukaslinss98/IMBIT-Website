import './../styles/App.css';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import Divider from './Divider';
import AbiFertig from './AbiFertig';
import Statistics from './Statistics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitlePage />
      <Divider />
      <AbiFertig />
      <Statistics />
      <Divider />
    </div>
  );
}

export default App;
