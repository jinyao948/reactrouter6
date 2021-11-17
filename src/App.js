import {Route, Routes} from 'react-router-dom'
import AllMeetup from './pages/AllMeetup';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';

function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<AllMeetup />}/>
        <Route path='/new-meetup' element={<NewMeetUp />}/>
       <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
