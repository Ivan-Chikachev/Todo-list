import './index.scss';
import Page from "./components/Page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import {AlertContext} from "./context/alert/alertContext";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";


function App() {

    return (
        <FirebaseState>
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">

                    <Switch>
                        <Route path={'/page'} exact component={Page}/>
                        <Route path={'/about'} component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
        </FirebaseState>
    );
}

export default App;
