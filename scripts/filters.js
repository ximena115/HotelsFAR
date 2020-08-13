class Filters extends React.Component {
 
 
  
  render() {
    const { onChange, initialDate,finalDate, data } = this.props
    //console.log(data)
    const paises = []
    data.map(x=> paises.push (x.country))

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }    
        
    const uniquePaises = paises.filter(unique)
    
    

 

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
            <select className="pais" onChange={onChange} name="pais">
              <option>todos los paises</option>
              
              { 
              uniquePaises.map(x=> <option key={x} value={x}>{x}</option>) 
              }
            </select>
          </div>

          <div className="select is-small">
            <select className="precio">
              <option>cualquier precio </option>
              {data.map(x=> <option value={x.price}>{x.price}</option>)}
            </select>
          </div>
          <div className="select is-small">
            <select className="habitaciones">
              <option>cualquier tamaño </option>
              {data.map(x=> <option>{x.rooms}</option>)}
            </select>
          </div>
        </div>
      </nav>
    );
  }
}
