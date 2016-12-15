import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AustinTexasUltraBlog7315647';


export function fetchPosts() {
  // Use the magic ` which is left of 1`
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
      type: FETCH_POSTS,
      payload: request

    };
}

//redux promise will grab this and axios sets up the HTTP AJAX

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
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
