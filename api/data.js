import axios from 'axios';

const PROD_PREFIX = 'http://reflectionsprojections.org';
const DEV_PREFIX = 'http://localhost:300';

const PREFIX = process.env.NODE_END === 'production' ? PROD_PREFIX : DEV_PREFIX;

export const fetchConference = () => {
  return axios.get(`${PREFIX}/static/data/rp2019.json`);
};

export const fetchGates = () => {
  return axios.get(`${PREFIX}/static/data/gates.json`);
};

export const fetchNav = () => {
  return axios.get(`${PREFIX}/static/data/nav.json`);
};
