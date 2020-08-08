class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <p class="title is-2 ">Reserva de hoteles</p>
        <p class="subtitle is-4">{this.props.fecha}</p>
      </div>
    );
  }
}
