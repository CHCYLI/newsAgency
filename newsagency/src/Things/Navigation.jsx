const Navigation = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">New Agency</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Business")}><span className="badge bg-light text-dark">Business</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Entertainment")}><span className="badge bg-light text-dark">Entertainment</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Health")}><span className="badge bg-light text-dark">Health</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Science")}><span className="badge bg-light text-dark">Science</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Sports")}><span className="badge bg-light text-dark">Sports</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("Technology")}><span className="badge bg-light text-dark">Technology</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation