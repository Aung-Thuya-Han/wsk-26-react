// TODO: add necessary imports

import {fetchData} from '../utils/fetchData';
import {useEffect, useState} from 'react';

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