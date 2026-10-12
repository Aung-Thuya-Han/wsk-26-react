import { useState } from "react";
import { useNavigate } from "react-router";
import useForm from "../hooks/formHooks";
import { useFile, useMedia } from "../hooks/apiHooks";

const Upload = () => {
  const [file, setFile] = useState(null);
  const { postFile } = useFile();
  const { postMedia } = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: "",
    description: "",
  };

  const doUpload = async (formInputs) => {
    try {
      const token = localStorage.getItem("token");
      const fileResult = await postFile(file, token);
      await postMedia(fileResult.data, formInputs, token);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doUpload,
    initValues,
  );

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://placehold.co/200?text=Choose+image"
          }
          alt="preview"
          width="200"
        />
        <button type="submit" disabled={!file || inputs.title.length <= 3}>
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
