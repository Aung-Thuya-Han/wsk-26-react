const SingleView = (props) => {
  const media = props.media;

  return (
    <dialog>
      <h1>{media.title}</h1>

      <img
        src={media.filename}
        alt={media.description}
        title={media.description}
      />

      <p>{media.description}</p>
    </dialog>
  );
};

export default SingleView;