import './App.css';
import TodoApp from './pages/todo-app/TodoApp';
import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
