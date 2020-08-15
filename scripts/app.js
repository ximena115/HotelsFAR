class App extends React.Component {
  state = {
    hotels: hotelsData,
    filtersInfo : {}

  };
    
  handleInput= (e) => {
    e.persist()   
    this.setState({
      filtersInfo : {
        ...this.state.filtersInfo ,
        [e.target.name]: e.target.value
      }
    })
    
}
  render() { 
    
   const { filtersInfo, hotels } = this.state
    console.log(this.state)
    return (
      <div>
       <Header 
          filtersInfo={filtersInfo} 
       /> 
       <Filters 
          onChange={this.handleInput} 
          data={hotels}
       />
       <CardsContainer  
          data={hotels}
       />
      </div>
       )}
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
