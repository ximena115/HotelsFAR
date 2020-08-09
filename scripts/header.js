class Header extends React.Component {

  render() {
    const { date } = this.props
    console.log(date)
  
    return (
      <div className="headerContainer">
        <p className="title is-2 ">Reserva de hoteles</p>
        <p className="subtitle is-4">{`Desde el ${date.initialDate} hasta el ${date.finalDate}`}</p>
      </div>
    );
  }
}
