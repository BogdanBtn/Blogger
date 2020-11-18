// react "type": "module";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Post} from './Home';
import {Search} from './Home';
import {Categories} from './Home';
import {Widget} from './Home';
import {NavBar} from './Home';
import {Comment} from './Home';
import {LeaveComment} from './Home';
import {LikeBtn} from './Home';
import {DisLikeBtn} from './Home';
import {ShareBtn} from './Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login  /> */}

    <NavBar />
    <Search />
    <Categories />
    <Widget />
    <Post />
    <Comment />
    <LeaveComment />
    <LikeBtn />
    <DisLikeBtn />
    <ShareBtn />

  </React.StrictMode>,
  document.getElementById('root')
);
