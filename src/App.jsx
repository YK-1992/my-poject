import './App.css'
import Header from './components/header/Header'
import Navi from './components/Navi/Navi'
import Bookings from './components/Offersection/bookings/Bookings'
import HoneyBlock from './components/Offersection/Honey'
import Offers from './components/Offersection/Offers'
import Partners from './components/Partners/Partners'
import Separite from './components/Separite/Separite'

function App() {

  return (
    <>
      <div className='headerNaviBlock'>
        <Header/>
      </div>
      <div>
        <Partners/>
     </div>
      <div> <Offers/></div>
      <div><HoneyBlock/></div>
      <div><Bookings/></div>
      <div><Separite/></div>
      <div>Footer</div>
      <div>Footer</div> 
      
    </>
  )
}

export default App
