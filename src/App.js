import './App.css';
import Calendar from './Components/Calendar';

function App() {
  const someDate = new Date(2020, 2, 23); // months starts from 0-11
  return (
    <div className="App">
     <Calendar date={someDate} />
    </div>
  );
}

export default App;
