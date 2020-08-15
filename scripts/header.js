class Header extends React.Component {
   
  render() {
    let showDates = null;
    const { filtersInfo } = this.props
    //console.log(filtersInfo.size )

    if (filtersInfo.inicialdate === !undefined) { 
     showDates=( <p className="subtitle is-5 has-text-light">{`Desde el ${filtersInfo.initialDate} hasta el ${filtersInfo.finalDate}`}</p>)
    } 
    
    
    return (
      <div className="headerContainer">
        <p className="title is-3 has-text-light	">Reserva de hoteles</p>
        
      {showDates/* {filtersInfo.inicialdate === !undefined? 
          <p className="subtitle is-5 has-text-light">{`Desde el ${filtersInfo.initialDate} hasta el ${filtersInfo.finalDate}`}</p>
         : 
         <p></p> 
        }*/}
        
       
        
      </div>
    );
  }
}
