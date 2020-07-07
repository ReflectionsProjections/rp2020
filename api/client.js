import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://www.reflectionsprojections.org'
    : 'http://localhost:3000';

export const fetchConferenceData = async () => {
  const url = `${prefix}/static/data/rp2019.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
  //const res = await axios.get(`${prefix}/static/data/rp2019.json`);
  //return res.data;
};

export const fetchNavData = async () => {
  const url = `${prefix}/static/data/nav.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
  //const res = await axios.get(`${prefix}/static/data/nav.json`);
  //return res.data;
};

export const fetchGates = async () => {
  const url = `${prefix}/static/data/gates.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
  //const res = await axios.get(`${prefix}/static/data/gates.json`);
  //return res.data;
};

export const fetchRegistrationConfig = async () => {
  const url = `${prefix}/static/data/registration.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
  //const res = await axios.get(`${prefix}/static/data/registration.json`);
  //return res.data;
};
