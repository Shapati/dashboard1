
import './App.css';
import Section from './Components/Section';
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Logo from './images/logo.png'
import Home from './images/Home.png'
import Calender from './images/calender.png'
import Settings from './images/settings.png'
import Published from './images/Tick Square.png'
import Bookmark from './images/Bookmark.png'
import Time from './images/Time Square.png'
import Notification from './images/plus2.png'
import Plus from './images/plus.png'
import Add from './images/+.png'
import Down from './images/down.png'
import Right from './images/right.png'
import Person1 from './images/48 Copy 5.png'
import Person2 from './images/48 Copy 6.png'
import Person3 from './images/48 Copy 7.png'
import Person4 from './images/48 Copy 8.png'
import Person5 from './images/48 Copy1.png'
import Person6 from './images/Story.png'
import Person7 from './images/Story2.png'
import Person8 from './images/Story5.png'
import Person10 from './images/48 Copy.png'
import Person11 from './images/48 Copy 4.png'
import Person12 from './images/48 Copy 3.png'
import views from './images/views.svg'
import views2 from './images/views2.svg'
import views3 from './images/views3.svg'
function App() {
  return (
    <div className="App">
     
     <div className='contain'>
     <Section Logo = {Logo}  Home ={Home} Calender = {Calender} Settings ={Settings} Published ={Published} Bookmark ={Bookmark} Time = {Time} Notification ={Notification}  Plus={Plus} Add = {Add} Right = {Right} Down = {Down} />
      <Section2 Person1 = {Person1} Person2 = {Person2} Person3 = {Person3} Person4 = {Person4} Person5 = {Person5} Person6 = {Person6} Person7 = {Person7} Person8 = {Person8} Person10 = {Person10} Person11 ={Person11} Person12 = {Person12} views = {views} views2 ={views2} views3= {views3}/>
      <Section3 />
     </div>

      
     
      </div>
   
  );
}

export default App;
