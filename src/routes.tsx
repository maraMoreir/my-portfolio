import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MyThemeProvider } from './theme/MyThemeProvider';
import { Page } from './Page';



export const AppRoutes = () => {
  return (
    <Router>
        <MyThemeProvider>
              <Routes>
                <Route path="/" element={<Page/>} />
                </Routes>
        </MyThemeProvider>
    </Router>
  );
};
