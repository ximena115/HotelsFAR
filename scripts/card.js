class Card extends React.Component {
    render() {
const  {name, photo, description, city, country, price, rooms} = this.props
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
              <h4>{`${city}, ${country}. `}</h4>
              <h4>Habitaciones: {rooms}</h4>
              <h4>{price}</h4>
            </div>
          </div>
        </div>
      );
    }
  }
  