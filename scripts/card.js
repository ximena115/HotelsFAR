class Card extends React.Component {
    render() {
        const  {name, photo, description, city, country, price, rooms} = this.props
        //console.log(price)
      return (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={photo} alt="Hotel"></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
              </div>
            </div>

            <div className="content">
              <p>{description}</p>
              <div className="info">
                <h4 className="infoContent">
                  <i className="fas fa-map-marked-alt"></i>
                  {`${city}, ${country}. `}
                </h4>
              </div>
              <div className="info">
                <h4 className="infoContent">
                  <i className="fas fa-bed"></i>
                  Habitaciones: {rooms}
                </h4>
              </div>
              <Price price={price} />
            </div>
          </div>
          <button ><h4 className="subtitle is-5 has-text-light">Reservar</h4></button>
        </div>
      );
    }
  }
  