import MediaRow from './MediaRow';

const MediaRows = (props) => {
  return props.items.map((media) => (
    <MediaRow
      key={media.media_id}
      media={media}
      setSelectedItem={props.setSelectedItem}
    />
  ));
};

export default MediaRows;