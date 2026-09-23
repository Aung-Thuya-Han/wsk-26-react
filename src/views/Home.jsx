import {useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useMedia} from '../hooks/apiHooks';


const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray} = useMedia();

  return (
    // <>
    //   <h2>My Media</h2>

    //   {selectedItem ? (
    //     <SingleView
    //       media={selectedItem}
    //       setSelectedItem={setSelectedItem}
    //     />
    //   ) : (
    //     ''
    //   )}

    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Thumbnail</th>
    //         <th>User</th>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Created</th>
    //         <th>Size</th>
    //         <th>Type</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <MediaRows
    //         items={mediaArray}
    //         setSelectedItem={setSelectedItem}
    //         selectedItem={selectedItem}
    //       />
    //     </tbody>
    //   </table>
    // </>

    
         <>
             {selectedItem ? (
              <SingleView
                media={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            ) : (
              ''
            )}

             <table>
                 <tbody>
                     {mediaArray.map((mediaItem) => (
                         <MediaRow
                             key={mediaItem.media_id}
                             media={mediaItem}
                             setSelectedItem={setSelectedItem}
                         />
                     ))}
                 </tbody>
             </table>
         </>
     );
 };


export default Home;
