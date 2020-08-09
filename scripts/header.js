class Header extends React.Component {

  render() {
    return (
      <div className="headerContainer">
        <p className="title is-2 ">Reserva de hoteles</p>
        <p className="subtitle is-4">{this.props.date}</p>
      </div>
    );
  }
}
