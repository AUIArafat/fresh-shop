function Member(props) {
    return (
        <div className="col-sm-6 col-lg-3">
        <div className="hover-team">
          <div className="our-team">
            {" "}
            <img src={props.member.imgSrc} alt="" />
            <div className="team-content">
              <h3 className="title">{props.member.name}</h3>{" "}
              <span className="post">{props.member.position}</span>{" "}
            </div>
            <ul className="social">
              <li>
                <a href="#" className="fab fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-google-plus"></a>
              </li>
              <li>
                <a href="#" className="fab fa-youtube"></a>
              </li>
            </ul>
            <div className="icon">
              {" "}
              <i className="fa fa-plus" aria-hidden="true"></i>{" "}
            </div>
          </div>
          <div className="team-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent urna diam, maximus ut ullamcorper quis, placerat id
              eros. Duis semper justo sed condimentum rutrum. Nunc
              tristique purus turpis. Maecenas vulputate.{" "}
            </p>
          </div>
          <hr className="my-0" />{" "}
        </div>
      </div>
      
    )
}

export default Member;