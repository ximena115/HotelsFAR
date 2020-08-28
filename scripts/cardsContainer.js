class CardsContainer extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="cardsContainer">
        {data.length == 0 ? (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <div className="message">
                  <i className="far fa-frown"></i>
                </div>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>¡Lo sentimos!</strong>
                    <br />
                    No tenemos resultados para tu busqueda.
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          data.map((hotels) => <Card key={hotels.slug} {...hotels} />)
        )}
      </div>
    );
  }
}
