import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const ROOT_URL = 'http://localhost:8080/api';
//const API_KEY = '?key=AustinTexasUltraBlog7315647';
const API_KEY = '';


export function fetchPosts() {
  // Use the magic ` which is left of 1`
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log (request);
    return {
      type: FETCH_POSTS,
      payload: request

    };
}

//redux promise will grab this and axios sets up the HTTP AJAX

export function createPost(props) {
  console.log("Creating poss!");
  // const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  const request = axios.post(`${ROOT_URL}/posts/`, props);
  console.log("Here is the request!");
  console.log(request);
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  //console.log("gettin");

  return {
    type: FETCH_POST,
    payload: request
  };

}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
