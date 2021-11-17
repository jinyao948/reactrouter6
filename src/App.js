import {Route, Routes} from 'react-router-dom'
import AllMeetup from './pages/AllMeetup';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout >
      <Routes>
      <Route path='/' element={<AllMeetup />}/>
        <Route path='/new-meetup' element={<NewMeetUp/>}/>
       <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
