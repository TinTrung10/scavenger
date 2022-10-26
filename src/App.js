import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ProfilePage from './pages/ProfilePage';
import Nav from './components/Nav';
import TopNav from './components/TopNav';
import PaperDetails from './components/PaperDetails';

function App() {
  return (

    <main>
      <TopNav />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/paper/:id" element={<PaperDetails />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </main>
    
  );
}

export default App;
