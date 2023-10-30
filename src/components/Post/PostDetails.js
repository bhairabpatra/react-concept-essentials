import React from "react"
import UseApi from "../hooks/UseApi";
import { useParams } from "react-router-dom";

const PostDetails = () =>{

    const {id} = useParams();
    const apiUrl ='https://jsonplaceholder.typicode.com/posts/'
    const [post, isLoading, error] = UseApi("user", apiUrl.concat(id));

    if(isLoading){
        return <h1>Loading ....</h1>
    }
    if(error){
        return <h1> {error.mesage}</h1>
    }

return (
  <>
    <div className="container mt-5">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.title}</td>
            <td> {post.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);  
}

export default PostDetails
 
