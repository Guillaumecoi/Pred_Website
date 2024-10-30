import { Routes, Route } from 'react-router-dom';
import { pages } from './constants';

function App() {
  return (
    <Routes>
      {pages.map((page, index) => (
        <Route
          key={index}
          path={page.url}
          element={<page.component {...page.props} />}
        />
      ))}
    </Routes>
  );
}

export default App;