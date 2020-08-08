class App extends React.Component {
  state = {
    hoteles: hotelsData,
    fechaInicial: today.toLocaleTimeString(),
  };
  
  render() {
   const {fechaInicial,hoteles} = this.state
    return (
      <div>
       <Header fecha={fechaInicial}/> 
       <Filters/>
       <CardsContainer data={hoteles}/>
      </div>
       )}
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
