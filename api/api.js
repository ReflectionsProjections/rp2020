import React, {useEffect} from 'react';

const API = 'https://api.hackillinois.org';

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method,
    headers: {
      Authorization: window.sessionStorage.getItem('rptoken'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  });
}

export function isAuthenticated() {
  return sessionStorage.getItem('rptoken');
}

export function authenticate(to) {
  if (process.env.REACT_APP_TOKEN) {
    window.sessionStorage.setItem('rptoken', process.env.REACT_APP_TOKEN);
  } else {
    //to = `${process.env.REACT_APP_URL}/auth/?to=${to}`;
    to = `${API}/auth/google/?redirect_uri=${to}`;
  }
  window.location.replace(to);
}

export function getToken(code) {
  return request('POST', '/auth/code/google/', { code })
    .then(res => res.token);
}

export function getRegistration(role) {
  return request('GET', `/registration/${role}/`);
}

export function register(isEditing, role, registration) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, `/registration/${role}/`, registration);
}

export function uploadFile(file, type) {
  return request('GET', `/upload/${type}/upload/`)
    .then(res => fetch(res[type], {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }))
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res);
    });
}

/*export function uploadFile(file, type) {
  return request('GET', `/upload/${type}/upload/`)
    .then(res => fetch(res[type], {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }))
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res);
    });
}*/