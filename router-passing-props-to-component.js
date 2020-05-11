import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Basic() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          {/* <Link to === <a href, it sets the url with a click*/}
          <li> <Link to="/">Home Page</Link> </li>
          <li> <Link to="/programming-languages">Programming Languages Page</Link> </li>
          <li> <Link to="/backend-frameworks">Backend Frameworks Page</Link> </li>
          <li> <Link to="/frontend-frameworks">Frontend Frameworks Page</Link> </li>
        </ul>
        <hr />
        {/* Switch looks to its child Routes and renders the first one that matches path with the current URL*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/programming-languages">
            <ProgrammingLanguages param="js-ts" />
          </Route>
          <Route path="/backend-frameworks" component={props => 
            <ProgrammingLanguages param="NodeJS"/>} 
          />
          <Route path="/frontend-frameworks" component={props => 
            <ProgrammingLanguages param="ReactJS"/>}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Content</h1>;
}

function ProgrammingLanguages(props) {
  const items = ["JavaScript", "TypeScript"];
  const listItems = items.map((item, index) => 
    <li key={index}> {item} </li>
  );
  return (
    <div>
      <h1>{props.param}</h1>
      <ul>{listItems}</ul>
    </div>
  );
}