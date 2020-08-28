class Filters extends React.Component {
  render() {
    const { onChange, initialDate, finalDate, data } = this.props;

    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    const paises = [];
    data.map((x) => paises.push(x.country));
    const uniqueCountry = paises.filter(unique).sort();

    const price = [];
    data.map((x) => price.push(x.price));
    const uniquePrice = price.filter(unique).sort();

    const rooms = [];
    data.map((x) => rooms.push(x.rooms));
    const uniqueRooms = rooms.filter(unique).sort();

    const sign = (price) => {
      let dollarSing = [];
      for (var i = 0; i < price; i++) {
        dollarSing.push("$");
      }
      return dollarSing;
    };

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
            <select className="country" onChange={onChange} name="country">
              <option value="">Todos los paises</option>
              {uniqueCountry.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>

          <div className="select is-small">
            <select className="price" onChange={onChange} name="price">
              <option value="">Cualquier precio</option>
              {uniquePrice.map((price) => (
                <option key={price} value={price}>
                  {sign(price)}
                </option>
              ))}
            </select>
          </div>
          <div className="select is-small">
            <select className="rooms" onChange={onChange} name="rooms">
              <option value="">Todos Los Tamaños</option>
              <option value="1">Hotel Pequeño</option>
              <option value="2">Hotel Mediano</option>
              <option value="3">Hotel Grande</option>
            </select>
          </div>
        </div>
      </nav>
    );
  }
}
