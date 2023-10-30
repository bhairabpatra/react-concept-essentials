import React from "react"
import UseApi from "../hooks/UseApi";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const Post = () =>{

    const data = useLoaderData();

    const apiUrl ='https://jsonplaceholder.typicode.com/posts'
    const [post, isLoading, error] = UseApi("user", apiUrl);

    if(isLoading){
        return <h1>Loading ....</h1>
    }
    if(error){
        return <h1> {error.mesage}</h1>
    }
   
    return (
      <div>
        <div className="container mt-5">
          <h1 className="mb-5">{data}</h1>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {post.map((post, i) => {
                return (
                  <tr key={post.id}>
                    <td>
                      <Link to={`${post.id}`} className="links">
                        {i + 1}
                      </Link>
                    </td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Post
 
export const redirectPost = async() => {
            return "Post Table"
}
