import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MyThemeProvider } from './theme/MyThemeProvider';
import { Home } from './Page/Home';
import { Skills } from './Page/Skills';
import { About } from './Page/About';
import { Projects } from './Page/Projects';
import { Contact } from './Page/Contact';

export const AppRoutes = () => {
  return (
    <Router>
        <MyThemeProvider>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
        </MyThemeProvider>
    </Router>
  );
};
