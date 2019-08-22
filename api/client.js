import axios from 'axios';

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://reflectionsprojections.org'
    : 'http://localhost:3000';

export const fetchConferenceData = async () => {
  const res = await axios.get(`${prefix}/static/data/rp2019.json`);
  return res.data;
};

export const fetchNavData = async () => {
  const res = await axios.get(`${prefix}/static/data/nav.json`);
  return res.data;
};

export const fetchGates = async () => {
  const res = await axios.get(`${prefix}/static/data/gates.json`);
  return res.data;
};
