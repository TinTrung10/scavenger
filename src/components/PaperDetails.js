import { useParams } from 'react-router-dom'
import data from './Data';
import "../iframestyling.css";

//Lavet af Martin Holme Elsborg

//Display the correct paper magazine for each store
//Mapping over image array from data.js and filter the correct paper with id
const PaperDetails = () => {
    const { id } = useParams();
  return (
    <div className='paper-details'>
       <>
      {data.filter(idx => idx.id === id).map((filteredPaper) => (
        <iframe className='iframe' key={id} allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" title='Tilbudsavis'
        frameBorder={0} overflow="hidden" overflow-x="hidden" overflow-y="hidden" scrolling="no" src={filteredPaper.url}></iframe>
      ))}
    </>
       
          
    </div>

    
  )
}

export default PaperDetails