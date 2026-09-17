// src/components/MediaRow.jsx
const MediaRow = (props) => {
  const media = props.media;
  return (
    <tr
      onClick={() => {
        props.setSelectedItem(media);
      }}
    >
      <td>
        <img
          src={media.thumbnail}
          alt={media.description}
          title={media.description}
        />
      </td>

      <td>{media.title}</td>
      <td>{media.description}</td>
      <td>{new Date(media.created_at).toLocaleDateString('fi-FI')}</td>
      <td>{media.filesize}</td>
      <td>{media.media_type}</td>
    </tr>
  );
};

export default MediaRow;