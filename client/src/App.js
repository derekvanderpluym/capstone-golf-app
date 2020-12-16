import './main.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Stats from './pages/Stats/Stats';
import ScoreCard from './components/ScoreCard/ScoreCard';
import Courses from './pages/Courses/Courses';
import AddCourse from './pages/AddCourse/AddCourse';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/add-course" exact component={AddCourse} />
          <Route path="/login" exact component={Login} />
          <Route path="/:courseid" exact component={ScoreCard} />
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
