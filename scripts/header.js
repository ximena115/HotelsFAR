class Header extends React.Component {
   
  render() {
    const { date } = this.props
    console.log(date.finalDate)
    
    return (
      <div className="headerContainer">
        <p className="title is-3 has-text-light	">Reserva de hoteles</p>
        <p className="subtitle is-5 has-text-light">{`Desde el ${date.initialDate} hasta el ${date.finalDate}`}</p>
        <p className="subtitle is-5 has-text-light">{`Desde el ${date.pais} hasta el ${date.pais}`}</p>
      </div>
    );
  }
}
