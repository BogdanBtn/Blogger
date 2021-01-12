import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import tt from './munte.jpg';
import logo from './munte.jpg'
import {userId} from './Login'
import "./Home.css";
import {withRouter} from 'react-router-dom'
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/jquery/jquery.min.js";
import "./vendor/bootstrap/js/bootstrap.bundle.min.js";
import { Redirect } from 'react-router';


   class Home extends React.Component {




    
    constructor (props){
        super(props);
        this.state={
            posts:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

        componentDidMount() {
            let url="http://localhost:4000/home";
            console.log("de ce nu merge?")
            

            fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                 // body data type must match "Content-Type" header
                 
            })
            .then((response) => response.json())
            .then(data => {
                this.setState({ posts: data });
                console.log("de ce nu merge?")
            });
        }
 

    handleClick(id) {
        this.props.history.push('/Home',{postId: id});
        localStorage.setItem('postId',id);
        // console.log(localStorage.getItem('currentUser'));
      }

render (){
//console.log(this.state.posts)

   return (
    // //<html>

    this.state.posts.map((post) =>
     <div className="container"><div className="row"><div className="col-md-8"><h1 className="my-4" id="nume_titlu" > </h1><div className="card mb-4"><img className="card-img-top" src={logo} alt="munte"/><div className="card-body"><h2 className="card-title"> {post.title}</h2><p className="card-text"> {post.descriere}</p><button  className="btn btn-primary" onClick={() => this.handleClick(post.id)}>Read More &rarr;</button></div><div className="card-footer text-muted">Posted on January 1</div></div></div></div></div>
    
    )
     // </html>
       // afisare
    );

    }
   }




function useHome(){

}


function Comment() {
    return (
            <div className="container">
                <div className="col-lg-8">
                    <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>
                    </div>
            </div>

    );
}

function LeaveComment() {
    return (
            <div className="container">
                <div className="col-lg-8">
                    <div className="card my-4">
                        <h5 className="card-header">Leave a Comment:</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
}

class Post extends React.Component {

    constructor (props){
        super(props);
        this.state={
            posts:[]
        }
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let url="http://localhost:4000/post";
        // console.log("de ce nu merge?")
        let datele={
            id:localStorage.getItem('postId')
        }
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
             // body data type must match "Content-Type" header
             body: JSON.stringify(datele)
        })
        .then((response) => response.json())
        .then(data => {
            this.setState({ posts: data });
            // console.log("de ce nu merge?")
        });
    }


    render(){

        // const state = this.props.location.state
        // console.log(state);
    return (
        this.state.posts.map((post) =>
        <div className="container"><div className="row"><div className="col-lg-8"><h1 className="mt-4"> {post.title}</h1><hr/><p> post.data_adaugarii </p> <hr/><img className="img-fluid rounded" src={logo} alt=""/><hr/> <p className="lead">  {post.content} </p></div></div></div>
        )
    
        );

}
}

function Btns() {
    return (
        <div className="butoane">

                <button type="button" className="btn btn-light">Like</button>
            
       
                <button type="button" className="btn btn-light">Dislike</button>
          
            
            <button type="button" className="btn btn-primary">Share</button>
            
        </div>
    );
}


function AddPost() {
    
    //let url="/";
    

    //const uId = getUserId();
    const titlu = React.createRef();
    const descriere = React.createRef();
    const postare = React.createRef();
    const history = useHistory();

    function insertPost(event){
        event.preventDefault();
        

        console.log();
        const currentUserSubject = localStorage.getItem('currentUser');
        const data = {
            id: currentUserSubject,
            titlu: titlu.current.value,
            descriere: descriere.current.value,
            postare: postare.current.value
        }
        let url="http://localhost:4000/addPost";
      
     // console.log(getUserId);
      
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(response => response.json())
      .then(data => {
        console.log(data.status)
        if(data.status==='ok'){
            try {
                history.push("/");
              } catch (e) {
                alert(e.message);
              }
        }
      });
    // });
    
      
     // console.log(data);

    //   res.redirect("/connect");
  }




    return (
        <div className="adaugaPostare" >
            <div className="container">

                <h1>Adauga o noua postare!</h1>
                <form onSubmit={insertPost}>
                    <div className="col-lg-8">
                        <div className="card my-4">
                            <h5 className="card-header">Titlu:</h5>
                            <div className="card-body">
                                
                                    <div className="form-group">
                                        <textarea className="form-control" rows="1" ref={titlu}></textarea>
                                    </div>
                                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        
                            </div>
                            <h5 className="card-header">Descriere:</h5>
                            <div className="card-body">
                                
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" ref={descriere}></textarea>
                                    </div>
                
                            </div>
                            <h5 className="card-header">Postare:</h5>
                            <div className="card-body">
                        
                                    <div className="form-group">
                                        <textarea className="form-control" rows="10" ref={postare}></textarea>
                                    </div>
                               
                            </div>
                            <h5 className="card-header">Adauga o imagine:</h5>
                            {/* <button onClick={'e'}>
                                Upload a file
                            </button> */}
                            
                        </div>
                    </div>
                    <button className="btn btn-primary">Submit &rarr;</button>
                </form>
                
                {/* <button type="submit" className="btn btn-primary" href={url}>Submit</button> */}
            </div>
            
        </div>
    );
}

function Search() {

    return (

        <div className="searchPozition">
            {/* <div className="container">

                <div className="row"> */}
                    <div className="col-md-4">
                        <div className="card my-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-append">
                                        <button className="btn btn-secondary" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                {/* </div>
            </div> */}
        </div>
    );
}

function Categories() {
    return (

        <div className="categoriesPozition">
            {/* <div className="container">

                <div className="row">     */}
                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/">Adventura</a>
                                </li>
                                <li>
                                    <a href="/">Stinta</a>
                                </li>
                                <li>
                                    <a href="/">Politica</a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/">Psihologie</a>
                                </li>
                                <li>
                                    <a href="/">Filosofie</a>
                                </li>
                                <li>
                                    <a href="/">Relige</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                {/* </div>
            </div> */}
        </div>
    );
}

function Widget() {
    return (

        <div className="widgetPozition">
            <div className="col-md-4">
                <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
                </div>
            </div>

      </div>

    </div>
    );
}

function NavBar() {
    let url1 = "/";
    let url2 = "/AddPost";
    let url3 = "/Login"
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href={url1}>Blog</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href={url1}>Home
                  {/* <span className="sr-only">(current)</span> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url2}>Creeaza</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url3}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default withRouter(Home)
export{Search,Comment,LeaveComment,Post,Btns,AddPost,NavBar,Widget,Categories,useHome};