import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./login/Login";
import SignUp from "./login/SignUp";
import Mainpage from "./Mainpage";
import { AuthProvider } from "./login/Auth";
//content

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/mainpage" component={Mainpage} />
          <Route exact path="/sighup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
