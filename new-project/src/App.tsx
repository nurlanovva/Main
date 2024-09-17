import { Routes, Route } from 'react-router-dom';
import { Main, Users, NotFound, Profile, Photos, Albums } from './pages';
import { Header } from './components/Base';
import { Footer } from './components/Base';
import { ThemeContext } from './context/ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function App() {
  const user = localStorage.getItem('user');

  const themeContext = useContext(ThemeContext);

  const { theme } = themeContext;

  return (  
      <div className={`appWrapper ${theme === 'light' ? 'light' : 'dark'}`} >
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="users" element={<Users />} />
        <Route path="photos" element={<Photos />} />
        <Route path="albums" element={<Albums />} />
        {user ? <Route path="profile" element={<Profile />} /> : <></>}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div >    
  );
}

export default App;
