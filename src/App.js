import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ProfilePage from './pages/ProfilePage';
import Nav from './components/Nav';
import TopNav from './components/TopNav';

function App() {
  return (

    <main>
      <TopNav />
      <Nav />
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </main>
  );
}

export default App;
