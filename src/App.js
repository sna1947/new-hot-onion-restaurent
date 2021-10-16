import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import BreakFast from './components/BreakFast/BreakFast';
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';
import AllFood from './components/AllFood/AllFood';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Food from './components/Food/Food';
import FoodDetails from './components/FoodDetails/FoodDetails';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          {/* <Route path='/breakfast'>  
                <BreakFast></BreakFast>
            </Route> */}

          <Route path='/allfood'>
            <AllFood></AllFood>
          </Route>
          {/* path='/allfood'এবং Router মধ্যে <AllFood></AllFood> দিলে ui তে AllFood  এর, সমস্ত ডাটা দেখাবে  */}

          {/* <Route path='/food'>
           <Food></Food>
          </Route> */}

          <Route path='/food/:foodId'>
           <FoodDetails></FoodDetails>
          </Route>

          <Route path='/breakfast'>
            <AllFood></AllFood>
          </Route>
          {/*  path='/breakfast' থাকবে , কিন্তু Router মধ্যে <AllFood></AllFood> বা অন্য যা দেব সেটা ui তে দেখাবে,  এখানে  AllFood  এর মধ্যে সমস্ত ডাটা আছে,তাই ui তে দেখাচ্ছে   */}

          {/* <Route path='/dinner'>
                <Dinner></Dinner>
            </Route> */}
          <Route path='/dinner'>
            <AllFood></AllFood>
          </Route>

          {/* <Route path='/lunch'>
                <Lunch></Lunch>
            </Route> */}
          <Route path='/lunch'>
            <AllFood></AllFood>
          </Route>


          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>

          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <ChooseUs></ChooseUs>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
