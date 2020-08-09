class App extends React.Component {
  state = {
    hoteles: hotelsData,
    date : {},

  };
    
  handleInput= (e) => {
    e.persist()   
    this.setState({
      date : {
        ...this.state.date ,
        [e.target.name]: e.target.value
      }
    })
    
}
  render() {
   const { finalDate, date ,hoteles } = this.state
   //console.log("App "+date )
    return (
      <div>
       <Header 
          date={date} 
          
       /> 
       <Filters 
          onChange={this.handleInput} 
       />
       <CardsContainer data={hoteles}/>
      </div>
       )}
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
