import {useUserContext} from '../hooks/contextHooks';

const Logout = () => {
  const {handleLogout} = useUserContext();

  return (
    <>
      <h1>Logout</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;