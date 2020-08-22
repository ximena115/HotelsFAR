class Filters extends React.Component {
 
 
  
  render() {
    const { onChange, initialDate, finalDate, data } = this.props

    //console.log(data)
   

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    } 

    const paises = []
    data.map(x=> paises.push (x.country))   
    const uniqueCountry = paises.filter(unique)
    
    const price = []
    data.map(x=> price.push (x.price))
    const uniquePrice = price.filter(unique)

    const rooms = []
    data.map(x=> rooms.push (x.rooms))
    const uniqueRooms = rooms.filter(unique)
    

 

    return (
      <nav
        className="filtersConteiner"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="initialDate">
            <input
              className="input is-small "
              type="date"
              name="initialDate"
              onChange={onChange}
              value={initialDate}
            />
          </div>
          <div className="finalDate">
            <input
              className="input is-small "
              type="date"
              name="finalDate"
              onChange={onChange}
              value={finalDate}
            />
          </div>
          <div className="select is-small">
            <select className="country" onChange={onChange} name="country" >
              <option>Todos los paises</option>
                {uniqueCountry.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
              ))}                                                       
            </select>
          </div>

          <div className="select is-small">
            <select className="price" onChange={onChange} name="price">
              <option>Cualquier precio</option>
                {uniquePrice.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
              ))}
            </select>
          </div>
          <div className="select is-small">
            <select className="rooms" onChange={onChange} name="rooms">
              <option>Calquier tamaño</option>
                {uniqueRooms.map((x) => (
                  <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    );
  }
}
