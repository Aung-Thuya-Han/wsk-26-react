const SingleView = (props) => {
  const media = props.media;

  return (
    <dialog open>
      <h1>{media.title}</h1>

      <div>
        <button
          onClick={() => {
            props.setSelectedItem(null);
          }}
        >
          x
        </button>
      </div>
      
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