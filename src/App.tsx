import './App.css';
import { GuessGender } from './contexts/GuessGender';
import Homepage from './pages/Homepage';

function App() {
  return (
    <GuessGender>
      <Homepage />
    </GuessGender>
  );
}

export default App;
