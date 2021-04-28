import "./App.css";
import routes from "./config/route"
import {PrivateRoute} from "./component/index"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    {routes.map((route) =>
                        route.private ? <PrivateRoute {...route} /> : <Route {...route} />
                    )}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
