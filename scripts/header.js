class Header extends React.Component {
   
  render() {
    
    const { filtersInfo, hideMessage } = this.props

  
      let showDates = null;
    if (!hideMessage) {

    }else{
      showDates = (
        <p className="subtitle is-5 has-text-light">
          {`Desde el ${filtersInfo.initialDate.format("MMM Do YY")} hasta el ${filtersInfo.finalDate.format("MMM Do YY")}`}
        </p>
      )   
  };
    
    return (
      <div className="headerContainer">
        <p className="title is-3 has-text-light	">Reserva de hoteles</p>
        {showDates}
        <p className="subtitle is-5 has-text-light">
          {`Desde el ${filtersInfo.initialDate} hasta el ${filtersInfo.finalDate}`}
        </p>
         
        
       
        
      </div>
    );
  }
}
