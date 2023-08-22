import './App.css';
import {Routes, Route} from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import Layout from './components/Layout';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/Users' element={<Users />}/>
          <Route path='/' element={<Posts />}/>
          <Route path='/Todos' element={<Todos />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
