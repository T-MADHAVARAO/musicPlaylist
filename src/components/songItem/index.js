import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {item, onDeleteSong} = props
  const {id, imageUrl, genre, name, duration} = item
  const deleteSong = () => {
    onDeleteSong(id)
  }

  return (
    <li className="item-cont">
      <div className="img-name">
        <img src={imageUrl} alt="track" className="song-img" />
        <div className="name">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-cont">
        <p>{duration}</p>
        <button data-testid="delete" type="button" onClick={deleteSong}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
