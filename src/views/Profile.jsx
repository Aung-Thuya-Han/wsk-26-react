import {useState} from 'react';
import {useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';



const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }

      try {
        const result = getUserByToken(token);
        setUser(result.user);
      } catch(error) {
        console.log('error', error)
      }
    }

    loadUser();
  },
  
  []);


  return <>My profile</>;
};

export default Profile;