import Home from './Yt/Home';
import {Routes, Route} from 'react-router-dom';
import Player from './Yt/Player';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/player' element={<Player/>}></Route>
          <Route path='/player/:id' element={<Player/>}></Route>
        </Routes>      
    </>
  );
}

export default App;
