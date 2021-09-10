const db = require('../../data/dbConfig');

const getResource = () => {
  return db('resources');
};

const createResource = async (resource) => {
  const newResource = await db('resources').insert(resource);
  return getResource(newResource);
};

module.exports = {
  getResource,
  createResource
};