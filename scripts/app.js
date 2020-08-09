class App extends React.Component {
  state = {
    hoteles: hotelsData,
    initialDate: "",
    finalDate: "",
  };
  
  render() {
   const {initialDate,hoteles} = this.state
   console.log(initialDate)
    return (
      <div>
       <Header date={initialDate}/> 
       <Filters/>
       <CardsContainer data={hoteles}/>
      </div>
       )}
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
