import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer';
import { GithubFinderProvider } from './context/Context';
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (

    <GithubFinderProvider >
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto px-3 pb-12' >

              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />

              </Routes>

            </main>

            <Footer />

          </div>
        </Router>
      </AlertProvider>

    </GithubFinderProvider>

  );
}

export default App;
