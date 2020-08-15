class App extends React.Component {
  state = {
    hotels: hotelsData,
    filtersInfo : {
      initialDate: moment(),
      finalDate: moment().add(15,"days"),
      country:"",
      price:"",
      rooms:"",
    }

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
   let hideMessage = false
    console.log(this.state)
    return (
      <div>
       <Header 
          filtersInfo={filtersInfo} 
          hideMessage={hideMessage}


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
