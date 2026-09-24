// TODO: add necessary imports

import {fetchData} from '../utils/fetchData';
import {useEffect, useState} from 'react';

const useUser = () => {
    const getUserByToken = (token) => {
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        };

        return fetchData(
          import.meta.env.VITE_AUTH_API + '/users/token',
          options
        );
      };

      return {getUserByToken};
  };


const useAuthentication = () => {

  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
      };

    const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
    return loginResult;

    }

    return {postLogin};
  }




const useMedia = () => {
  // TODO: move mediaArray state here
  // TODO: move getMedia function here
  // TODO: move useEffect here

  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
  const getMedia = async () => {
    try {
      const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

      const userListPromises = json.map((media) =>
      fetchData(
        import.meta.env.VITE_AUTH_API + '/users/' + media.user_id
          )
        );

        const userListData = await Promise.all(userListPromises);


        const combinedData = json.map((item) => {
          const foundUser = userListData.find(
            (user) => user.user_id === item.user_id
          );

          return {
            ...item,
            user: foundUser,
          };
        });

      console.log('userListData', userListData);

      setMediaArray(combinedData);

      console.log('combinedData', combinedData);

    } catch (error) {
      console.error(error);
    }
  };


  getMedia();
}, []);


  return {mediaArray};
};

export {useMedia};
export {useAuthentication};
export {useUser};