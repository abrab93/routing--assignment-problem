import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../src/hoc/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{ textAlign: 'left' }}>
            <li><strike>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</strike></li>
            <li><strike>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</strike></li>
            <li><strike>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</strike></li>
            <li><strike>Pass the course ID to the "Course" page and output it there</strike></li>
            <li><strike>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</strike></li>
            <li><strike>Load the "Course" component as a nested component of "Courses"</strike></li>
            <li><strike>Add a 404 error page and render it for any unknown routes</strike></li>
            <li><strike>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</strike></li>
          </ol>
          <br />
          <br />
          <Layout />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
