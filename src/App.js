import './App.css';
import { ConVertPdf } from './pages/convert-pdf/ConVertPdf';
import TodoApp from './pages/todo-app/TodoApp';
import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/convert-pdf" component={ConVertPdf} />
          <Route path="/todo-app" component={TodoApp} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
