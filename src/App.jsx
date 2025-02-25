// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import your i18n configuration
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Womenshirts from './components/Womenshirts';
import Shoes from './components/Shoes';
import Perfumes from './components/Perfumes';
import Layout from './components/Layout';

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 120,
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
      <Router>
        <Navbar /> {/* Navbar is inside I18nextProvider */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <Products />
                <Womenshirts />
                <Shoes />
                <Perfumes />
              </Layout>
            }
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />

          {/* Women's Shirts Page */}
          <Route
            path="/womenshirts"
            element={
              <Layout>
                <Womenshirts />
              </Layout>
            }
          />

          {/* Shoes Page */}
          <Route
            path="/shoes"
            element={
              <Layout>
                <Shoes />
              </Layout>
            }
          />

          {/* Perfumes Page */}
          <Route
            path="/perfumes"
            element={
              <Layout>
                <Perfumes />
              </Layout>
            }
          />

          {/* 404 Page (Optional) */}
          <Route
            path="*"
            element={
              <Layout>
                <h1>404 - Page Not Found</h1>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;