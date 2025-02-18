import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage.js';
import About from './pages/AboutPage.js';
import Contact from './pages/ContactPage.js';
import Portfolio from './pages/PortfolioPage.js';
import Resume from './pages/ResumePage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
