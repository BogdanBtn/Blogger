import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from './munte.jpg';
import "./Home.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/jquery/jquery.min.js";
import "./vendor/bootstrap/js/bootstrap.bundle.min.js";
import { Redirect } from 'react-router';


 function Home() {
     let urls="/Home";
    return (
    <html>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1 className="my-4">Page Heading
                </h1>
            <div className="card mb-4">
            <img className="card-img-top" src={logo} alt="munte"/>
            <div className="card-body">
                <h2 className="card-title">Post Title</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <a href={urls} className="btn btn-primary">Read More &rarr;</a>

            </div>
            <div className="card-footer text-muted">
                Posted on January 1
            </div>
            </div>
            </div>
        </div>
    </div>
    </html>
      );
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

function Post() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="mt-4">Post Title</h1>
                    
                    <hr/>
                    <p>Posted on January 1, 2019 at 12:00 PM</p> 
                    <hr/>
                    <img className="img-fluid rounded" src={logo} alt=""/>
                    <hr/>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p> 
                </div>
            </div>
        </div>
    );

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
    let url="/";
    return (
        <div className="adaugaPostare" >
            <div className="container">
                <h1>Adauga o noua postare!</h1>
                <div className="col-lg-8">
                    <div className="card my-4">
                        <h5 className="card-header">Titlu:</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" rows="1"></textarea>
                                </div>
                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                        <h5 className="card-header">Descriere:</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <h5 className="card-header">Postare:</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" rows="10"></textarea>
                                </div>
                            </form>
                        </div>
                        <h5 className="card-header">Adauga o imagine:</h5>
                        <button onClick={'e'}>
                            Upload a file
                        </button>
                        
                    </div>
                </div>
                <a href={url} className="btn btn-primary">Submit &rarr;</a>
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
    let url3="/Login";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/" alt=""> Blog </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href={url1}>Home
                  {/* <span class="sr-only">(current)</span> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url2}>Creeaza</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url3}> Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}


export{Home,Search,Comment,LeaveComment,Post,Btns,AddPost,NavBar,Widget,Categories};