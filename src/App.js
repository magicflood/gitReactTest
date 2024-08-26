import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
