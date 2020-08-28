class App extends React.Component {
  state = {
    hotels: hotelsData,
    filtersInfo: {
      initialDate: moment(),
      finalDate: moment().add(15, "days"),
      country: "",
      price: "",
      rooms: "",
    },
  };

  handleInput = (e) => {
    e.persist();
    this.setState({
      filtersInfo: {
        ...this.state.filtersInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { filtersInfo, hotels } = this.state;

    let selection = hotels;
    let selectionD;
    selection = hotels.filter(
      (obj) =>
        (filtersInfo.country ? obj.country === filtersInfo.country : true) &&
        (filtersInfo.price ? obj.price == filtersInfo.price : true) &&
        (filtersInfo.rooms == 1
          ? obj.rooms <= 10
          : filtersInfo.rooms == 2
          ? obj.rooms > 10 && obj.rooms <= 2
          : filtersInfo.rooms == 3
          ? obj.rooms > 20
          : true)
    );
    selectionD = selection.filter(
      (obj) =>
        moment(obj.availabilityFrom).isSameOrBefore(
          filtersInfo.initialDate,
          "day"
        ) &&
        moment(obj.availabilityTo).isSameOrAfter(filtersInfo.finalDate, "day")
    );

    return (
      <div>
        <Header filtersInfo={filtersInfo} />
        <Filters onChange={this.handleInput} data={hotels} />
        <CardsContainer data={selectionD} />
      </div>
    );
  }
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
