import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    issues: [],
    allIssues: [],
    comments: [],
    errMsg: ''
  };

  const [userState, setUserState] = useState(initState);

  async function signup(creds) {
    try {
      const res = await axios.post('/api/auth/signup', creds);
      const { user, token } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUserState(prevUserState => ({
        ...prevUserState,
        user: user,
        token: token
      }));
    } catch (error) {
      handleAuthErr(error.response.data.errMsg);
    }
  }

  async function login(creds) {
    try {
      const res = await axios.post('/api/auth/login', creds);
      const { user, token } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUserState(prevUserState => ({
        ...prevUserState,
        user: user,
        token: token
      }));
    } catch (error) {
      handleAuthErr(error.response.data.errMsg);
    }
  }

  function logout() {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUserState(prevUserState => ({
        ...prevUserState,
        token: '',
        user: {}
      }));
    } catch (error) {
      console.log(error);
    }
  }

  function handleAuthErr(errMsg) {
    setUserState(prevUserState => ({
      ...prevUserState,
      errMsg
    }));
  }

  function resetAuthErr() {
    setUserState(prevUserState => ({
      ...prevUserState,
      errMsg: ''
    }));
  }

  async function getUserIssues() {
    try {
      const res = await userAxios.get('/api/main/issues/user');
      setUserState(prevState => ({
        ...prevState,
        issues: res.data
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function addIssue(newIssue) {
    try {
      const res = await userAxios.post('/api/main/issues', newIssue);
      setUserState(prevState => ({
        ...prevState,
        issues: [...prevState.issues, res.data]
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllIssues() {
    try {
      const res = await userAxios.get('/api/main/issues');
      setUserState(prevState => ({
        ...prevState,
        allIssues: res.data
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function updateIssue(issueId, updatedIssue) {
    try {
      const res = await userAxios.put(`/api/main/issues/${issueId}`, updatedIssue);
      setUserState(prevState => ({
        ...prevState,
        issues: prevState.issues.map(issue =>
          issue._id === issueId ? res.data : issue
        ),
        allIssues: prevState.allIssues.map(issue =>
          issue._id === issueId ? res.data : issue
        )
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteIssue(issueId) {
    try {
      await userAxios.delete(`/api/main/issues/${issueId}`);
      setUserState(prevState => ({
        ...prevState,
        issues: prevState.issues.filter(issue => issue._id !== issueId),
        allIssues: prevState.allIssues.filter(issue => issue._id !== issueId)
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpvote(issueId) {
    try {
      const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`);
      setUserState(prevState => ({
        ...prevState,
        allIssues: prevState.allIssues.map(issue => issue._id === issueId ? res.data : issue),
        issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDownvote(issueId) {
    try {
      const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`);
      setUserState(prevState => ({
        ...prevState,
        allIssues: prevState.allIssues.map(issue => issue._id === issueId ? res.data : issue),
        issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function addComment(newComment) {
    try {
      const res = await userAxios.post('/api/main/comments', newComment);
      setUserState(prevState => ({
        ...prevState,
        comments: [...prevState.comments, res.data]
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments(issueId) {
    try {
      const res = await userAxios.get(`/api/main/comments/${issueId}`);
      return res.data;  // Return the fetched comments
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComment(commentId) {
    try {
      await userAxios.delete(`/api/main/comments/${commentId}`);
      setUserState(prevState => ({
        ...prevState,
        comments: prevState.comments.filter(comment => comment._id !== commentId)
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function updateComment(commentId, updatedComment) {
    try {
      const res = await userAxios.put(`/api/main/comments/${commentId}`, updatedComment);
      setUserState(prevState => ({
        ...prevState,
        comments: prevState.comments.map(comment =>
          comment._id === commentId ? res.data : comment
        )
      }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{
      ...userState,
      signup,
      login,
      logout,
      getUserIssues,
      addIssue,
      getAllIssues,
      updateIssue,
      deleteIssue,
      handleAuthErr,
      resetAuthErr,
      handleUpvote,
      handleDownvote,
      addComment,
      getComments,
      deleteComment,
      updateComment
    }}>
      {props.children}
    </UserContext.Provider>
  );
}
