import noImage from '../assets/no image.jpg'


function NewsCard({ singleNews }) {

  const {author , title , description , url , urlToImage , publishedAt} = singleNews


  return (
    <div className=" card col-md-6 col-lg-4 col-sm-12 rounded-0" >
      <img style={{ height: "190px" }} src={urlToImage ? urlToImage : noImage} className="card-img-top rounded-0 p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span className='d-flex'>
          <p className='text-secondary'>{author}</p>
          <p>&nbsp; &nbsp;</p>
          <p className=' text-secondary'>{publishedAt}</p>
        </span>
        <a target='_blank' href={url} className="btn btn-primary rounded-0 w-100">Read More</a>

      </div>
    </div>
  )
}

export default NewsCard
