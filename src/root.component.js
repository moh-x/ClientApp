import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <section>
      <Router>
        <Switch>
          <Route path="/" exact>
            {props.name} is mounted!
            <h1>Heyyyy!</h1>
          </Route>
        </Switch>
      </Router>
    </section>
  );
}
