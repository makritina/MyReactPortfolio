import './sass/main.min.css';
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import Contact from './components/Contact'
import Work from './components/Work'
import {Switch, Route} from 'react-router-dom'




function App() {
  return (
    <div >
    <Switch>
<Route path="/" exact component={HomeView}/>
<Route path="/about" component={AboutView}/>

<Route path="/contact" component={Contact}/>
<Route path="/work" component={Work}/>
</Switch>
    </div>
  );
}

export default App;
