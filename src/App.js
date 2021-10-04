import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Footer from './AllComponent/Footer/Footer';
import Header from './AllComponent/Header/Header';
import Services from './AllComponent/Services/Service';
import AboutUs from './AllComponent/AboutUS/About'
import TermsCondition from './AllComponent/TermsCondition/TermsCondition';

import Homes from './AllComponent/Home/Homes';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/'>
                    <Homes></Homes>
                </Route> 
                <Route path='/services'>
                  <Services></Services>
                </Route>
                <Route path='/aboutus'>
                  <AboutUs></AboutUs>
                </Route>
                <Route path='/termsandCondition'>
                  <TermsCondition></TermsCondition>
                </Route>
                <Route path='*'>
                    <NotFound></NotFound>
                </Route>

            </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;



