import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link,useNavigate  } from "react-router-dom";
import Button from '@mui/material/Button';
import { Shop } from '@mui/icons-material';
import { Profile } from './Profile';
import { Shoppage } from './Shoppage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Profile" element={<Profile />} />
            <Route path="/Shop" element={<Shoppage />} />
      </Routes>
     </div>

    </div>
  )
}
function Home() {
  const navigate =useNavigate()
return <div className='home_content_container'>
<div className='furniture_img_container'>
 <img className="furniture_img" src='https://blog.furnitureinfashion.net/wp-content/uploads/2020/01/blogpost1.jpg' />
  <div className='button_container'>
    <Button sx={{
      backgroundColor:`rgb(138, 62, 0)`
    }} className='button' variant="contained" onClick={()=>navigate("/Shop")}>View Desings</Button>
    <p className='home_quote'>
  <h1>
  FURNITURE IN FASHION</h1>
  <h4>
  Furniture in Fashion has been the leader of the market when it comes to furniture and décor in the UK. They serve as the top furniture store where you can purchase every sort of furniture you desire. There is a significant selection of furniture, ranging from living room furniture to office furniture and bar stools to bathroom furniture. There is a never-ending variety of furniture that is up to the modern standards and requirements.

The range of furniture and décor includes stylish beds, exceptional dining tables, computer desks, TV stands, coffee tables, sofas, and amazing wardrobes. So, you can choose from such a vast variety of furniture and beautify your houses with some magnificent décor. Other than being the best online furniture store in the UK, they are also the most affordable store. Their prices are the cheapest among all the top-quality furniture shops nationwide.
  </h4>
  <h1>
  MADE
  </h1>
  <h4>MADE promises a fantastic range of designer furniture in the UK. Based in London, they are one of the most renowned furniture online stores. Above all, they are known for their extraordinary deals on their products. For instance, you can get £10 off your first order. They provide stylish and modernized furniture and décor.

MADE offers a large variety of furniture in the UK. They offer chairs, tables, sofas, storage items, beds, lighting services, and other accessories. They also allow you to share your idea with them to get your desired furniture.</h4>
</p>
    </div> 
  
</div>

</div>
}
function Navbar(){
  const navigate =useNavigate()
  return <div className='navbar_container'>
    
    <h3 onClick={()=>navigate("/")} className='nav_route_title'>Home</h3>
    <h3 onClick={()=>navigate("Profile")}className='nav_route_title'>Add your design</h3>
    {/* <h3 onClick={()=>navigate("")}className='nav_route_title'>About</h3> */}
         
    </div>
}
export default App
