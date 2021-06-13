import styles from './App.module.css';
// import PeoplePage from "../PeoplePage/PeoplePage";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
// import HomePage from "../HomePage/HomePage";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/Header/Header";


function App() {
  return (
    < >
        <Router>
            <div className={styles.wrapper}>
              <Header/>
           <Switch>
            {routesConfig.map((route, index)=> {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
                )
            })}
           </Switch>
            </div>
        </Router>


    </>
  );
}

export default App;
