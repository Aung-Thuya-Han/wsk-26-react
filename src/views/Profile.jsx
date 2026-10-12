import { useUserContext } from "../hooks/contextHooks";

const Profile = () => {
  const { user } = useUserContext();

  return (
    <>
      <h1>My Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Profile;
