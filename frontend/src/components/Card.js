const Card = ({image}) => {

  return (
    <div className='card'>
      <img className="card-image" src={image} alt="" />
    </div>
  )
}

export default Card