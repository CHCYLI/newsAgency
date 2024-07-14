import newsIcon from '../assets/newsIcon.jpg'

const Items = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"350px"}}>
            <img src={src?src:newsIcon} style={{height:"160px", width:"270px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,100)}</h5>
            <p className="card-text">{description?description.slice(0,60):"News regarding current events."}</p>
            <a href={url} className="btn btn-primary">More about this...</a>
        </div>
    </div>
  )
}

export default Items