import {useState} from 'react';
import {useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';



const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }

      try {
        const result = await getUserByToken(token);
        setUser(result.user);
      } catch(error) {
        console.log('error', error)
      }
    }

    loadUser();
  },

  []);


  return (
    <>
  <h1>My Profile</h1>

  {!user ? (

    <p>You are not logged in yet.</p>
    
  ) : (
    <>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    </>
  )
}

    </>
  );
};

export default Profile;