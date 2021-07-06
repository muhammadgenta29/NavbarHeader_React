import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
    <Particles
    params={{
      particles: {
        number: {
          value:30,
          density: {
            enable:true,
            value_area: 900
          }
        },
        shape: {
          type: 'square',
          stroke: {
            width: 6,
            color: '#0000ff'
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
