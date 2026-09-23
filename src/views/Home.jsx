import MediaRows from '../components/MediaRows';
import SingleView from '../components/SingleView';
import {useState} from 'react';
import {fetchData} from '../utils/fetchData';



const Home = () => {


// const mediaArray = [
//   {
//     media_id: 1,
//     user_id: 1,
//     filename:
//       'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cat_.jpg?width=1200',
//     thumbnail:
//       'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cat_.jpg?width=320',
//     filesize: 2760000,
//     media_type: 'image/jpeg',
//     title: 'Relaxing Cat',
//     description: 'A cat relaxing on a small sofa.',
//     created_at: '2026-09-17T10:00:00.000Z',
//   },
//   {
//     media_id: 2,
//     user_id: 1,
//     filename:
//       'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dog_(23895191068).jpg?width=1200',
//     thumbnail:
//       'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dog_(23895191068).jpg?width=320',
//     filesize: 7390000,
//     media_type: 'image/jpeg',
//     title: 'Friendly Dog',
//     description: 'A close photograph of a friendly dog.',
//     created_at: '2026-09-17T11:00:00.000Z',
//   },
//   {
//     media_id: 3,
//     user_id: 1,
//     filename:
//       'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//     thumbnail:
//       'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sunflower_.jpg?width=320',
//     filesize: 1120000,
//     media_type: 'video/mp4',
//     title: 'Flower Video',
//     description: 'A short video of a flower moving in the wind.',
//     created_at: '2026-09-17T12:00:00.000Z',
//   },
// ];

const [selectedItem, setSelectedItem] = useState(null);

const [mediaArray, setMediaArray] = useState([]);

const getMedia = async () => {
  const json = await fetchData('test.json');
  setMediaArray(json);
};

getMedia();
console.log(mediaArray);


  return (
    <>
      <h2>My Media</h2>

      {selectedItem ? (
        <SingleView
        media={selectedItem}
        setSelectedItem={setSelectedItem}
          />
        ) : (
          ''
        )}

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          
            <MediaRows
              items={mediaArray}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          
        </tbody>
      </table>

      

    </>
    
  );
};


export default Home;