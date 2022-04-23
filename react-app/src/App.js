import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Container from './components/Container'
import Footer from './components/Footer'
const App = () => {
    return (
        <div className='container'>
            <Header />
            <Nav />
            <Container />
            <Footer />
        </div>
    )
}

export default App
