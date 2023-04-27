import './App.css';
import TodoApp from './pages/todo-app/TodoApp';
import Home from './pages/home/Home';
import { TodoAppContext } from './pages/todo-app-context/TodoApp';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { StoreProvider } from './store';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/todo-app-context" element={
            <StoreProvider>
              <TodoAppContext />
            </StoreProvider>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
