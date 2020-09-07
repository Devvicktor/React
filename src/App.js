import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import TopBar from './components/TopBar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './style.css'
import singleProduct from './Pages/singleProduct'
export default function App() {
    return (
     <Router>
        <TopBar/>
         <div className='container'>
         <Switch>

             <Route exact path='/' component={ProductList}/>
             <Route exact path='/Login' component={Login}/>
             <Route exact path='/Register' component={Register}/>
            {/* <Route exact path='/product/:productid' component={singleProduct}/> */}
         </Switch>
         </div>

     </Router>
    )
}
