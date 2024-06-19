
import './App.css';
import Nav from './components/nav/Nav.jsx';
import Hero from './components/section1/Hero.jsx';
import Hello from './components/helloFresh/Hello.jsx';
import Box from './components/box/Box.jsx';
import Fresh from './components/fresh/Fresh.jsx';
import Tag from './components/tag/Tag.jsx';
import Flexible from './components/flexible/Flexible.jsx';
import Question from './components/question/Question.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {

  return (
    <div className='container'>
    <Nav/>
    <Hero/>
    <Hello/>
    <Box/>
    <Fresh/>
    <Tag/>
    <Flexible/>
    <Question/>
    <Footer/>
    </div>
  )
}

export default App
