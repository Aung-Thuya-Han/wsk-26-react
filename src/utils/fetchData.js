const fetchData = async (url, options = {}) => {

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(`Error ${response.status} occurred`);
  }

  return json;
  
};

export {fetchData};