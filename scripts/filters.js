class Filters extends React.Component {
  state={
    initialDate:"",
  }
  
  handleInput= (e) => {
      this.setState(
        {
          [e.target.name]: e.target.value
        }
      )
      
  }
  
  render() {
    console.log(this.state.initialDate)
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
               value={this.state.initialDate}
               onChange={this.handleInput}
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
