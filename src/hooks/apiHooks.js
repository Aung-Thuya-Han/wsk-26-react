import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      options,
    );
  };

  return { postLogin };
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append("file", file);

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + "/upload",
      options,
    );
  };

  return { postFile };
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const postMedia = async (fileData, inputs, token) => {
    const mediaData = {
      title: inputs.title,
      description: inputs.description,
      filename: fileData.filename,
      media_type: fileData.media_type,
      filesize: fileData.filesize,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(mediaData),
    };

    return await fetchData(import.meta.env.VITE_MEDIA_API + "/media", options);
  };

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

        const userListPromises = json.map((media) =>
          fetchData(import.meta.env.VITE_AUTH_API + "/users/" + media.user_id),
        );
        const userListData = await Promise.all(userListPromises);

        const combinedData = json.map((item) => {
          const foundUser = userListData.find(
            (user) => user.user_id === item.user_id,
          );

          return {
            ...item,
            user: foundUser,
          };
        });

        setMediaArray(combinedData);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return { mediaArray, postMedia };
};

const useUser = () => {
  const getUserByToken = (token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return fetchData(import.meta.env.VITE_AUTH_API + "/users/token", options);
  };

  const postUser = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + "/users", options);
  };

  return { getUserByToken, postUser };
};

export { useAuthentication, useFile, useMedia, useUser };
