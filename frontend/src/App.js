import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' exact component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
