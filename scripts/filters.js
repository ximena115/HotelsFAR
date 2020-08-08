class Filters extends React.Component {

  render() {
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
               
              />
          </div>
          <div className="finalDate">
            <input 
                className="input is-small " 
                type="date" 
                name="initialDate" 
            />
          </div>
          <div className="select is-small">
            <select className="pais">
              <option>todos los paises</option>
              <option>With options</option>
            </select>
          </div>

          <div className="select is-small">
            <select className="precio">
              <option>cualquier precio </option>
              <option>With options</option>
            </select>
          </div>
          <div className="select is-small">
            <select className="habitaciones">
              <option>cualquier tamaño </option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </nav>
    );
  }
}
