import {Link} from 'react-router';

const MediaRow = (props) => {
  const media = props.media;
  return (
    <tr>
      <td>
        <Link
         to="/single"
          state={{media}}
        >
        <img
          src={media.thumbnail}
          alt={media.description}
          title={media.description}
        />
        </Link>
      </td>

      <td>{media.user.username}</td>
      <td>{media.title}</td>
      <td>{media.description}</td>
      <td>{new Date(media.created_at).toLocaleDateString('fi-FI')}</td>
      <td>{media.filesize}</td>
      <td>{media.media_type}</td>
    </tr>
  );
};

export default MediaRow;