import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <ScrollProgress />
        <Navigation />
        <main className="flex-grow pt-16">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;