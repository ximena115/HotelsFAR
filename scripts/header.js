class Header extends React.Component {
  render() {
    const { initialDate, finalDate, hideMessage } = this.props.filtersInfo;

    return (
      <div className="headerContainer">
        <p className="title is-3 has-text-light	">Reserva de hoteles</p>
        <p className="subtitle is-5 has-text-light">
          {`Desde el ${moment(initialDate).format("dddd")}, ${moment(
            initialDate
          ).format("D")} de ${moment(initialDate).format(
            "MMMM"
          )} hasta el ${moment(finalDate).format("dddd")}, ${moment(
            finalDate
          ).format("D")} de ${moment(finalDate).format("MMMM")}`}
        </p>
      </div>
    );
  }
}
