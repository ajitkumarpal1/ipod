if(this.state.currentScreen === "allSoung"){
  console.log(this.state.currentMusicHomeItam)
  this.setState((prevState)=>({ 
    currentScreen: "home",
    allSoungItam:0}),()=>{
      console.log("ajit>>>>",this.state)
    })
}