import {Route, Routes} from 'react-router-dom'
import AllMeetup from './pages/AllMeetup';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div >
      <MainNavigation/>
      <Routes>
      <Route path='/' element={<AllMeetup />}/>
        <Route path='/new-meetup' element={<NewMeetUp />}/>
       <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
