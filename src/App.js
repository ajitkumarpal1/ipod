import { Component } from "react";
import { IpodBody } from "./component/ipodBody";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: "home",
      menuVisible: false,
      currentCover: 0,
      currentMenuItam: 0,
      play:false,
      currentMusicHomeItam: 0,
      currentCoverItam: 0,
      allSoungItam:0,
      activeCpmp: "",
      musicData:{}
    };
  }
  playPause = ()=>{
    this.setState((prevProps)=>({play:!prevProps.play}))
  }
  openNewPane = () => {
    if (this.state.menuVisible) {
      switch (this.state.currentMenuItam) {
        case 0:
          this.setState({
            currentScreen: "musicHome",
            menuVisible: false,
            currentMenuItam: 0,
            activeCpmp: "musicHome"
          });
          break;
        case 1:
          this.setState({
            currentScreen: "cover", menuVisible: false,
            currentMenuItam: 0,
            activeCpmp: "cover"
          });
          break;
        case 2:
          this.setState({
            currentScreen: "games", menuVisible: false,
            currentMenuItam: 0,
            activeCpmp: "game"
          });
          break;
        case 3:
          this.setState({
            currentScreen: "settings", menuVisible: false,
            currentMenuItam: 0,
            activeCpmp: "settings"
          });
          break;
        default:
          this.setState({
            currentScreen: "home", menuVisible: false,
            currentMenuItam: 0,
            activeCpmp: "home" });
          break;
      }

    }else if(this.state.currentScreen === "cover"){
      this.setState((prevState)=>({ 
        currentCover: prevState.currentCoverItam,
        currentCoverItam:0,
        currentScreen: "home",}))
    }else if(this.state.currentScreen === "musicHome"){
      this.setState((prevState)=>({ 
        currentCover: prevState.currentMusicHomeItam,
        currentMusicHomeItam:0,
        currentScreen: "allSoung",
        allSoungItam:0}))
    }else if(this.state.currentScreen === "allSoung"){
      this.setState((prevState)=>({ 
        currentScreen: "home"
      }))
    } else{
      this.setState((prevState)=>{
        return {play:!this.state.play}
      })
    }
  }
  currentCoverUpdate = (cov)=>{
    this.setState({currentCover:cov})
  }
  toggleMenu = () => {
    
    this.setState((prevState) => {
      if (!prevState.menuVisible) {
        return ({
          activeCpmp: !prevState.menuVisible ? "menu" : "",
          menuVisible: !prevState.menuVisible
        })
      }else{
        return ({
          activeCpmp: !prevState.menuVisible ? "menu" : "",
          menuVisible: !prevState.menuVisible
        })
      }
      
    });
  };
  menuUpdate = (direction, limit = 2) => {
    if (this.state.activeCpmp === "menu") {
      if (direction === "down") {
        this.setState((prevState) => (prevState.currentMenuItam < 3 ? { currentMenuItam: prevState.currentMenuItam + 1 } : { currentMenuItam: 0 }))
      } else {
        this.setState((prevState) => (prevState.currentMenuItam !== 0 ? { currentMenuItam: prevState.currentMenuItam - 1 } : { currentMenuItam: 3 }))
      }
    } else if (this.state.currentScreen === "musicHome") {
      if (this.state.currentMusicHomeItam < limit && direction === "down") {
        this.setState((prevState) => {
          return { currentMusicHomeItam: prevState.currentMusicHomeItam + 1 }
        })
      } else if (this.state.currentMusicHomeItam >= limit && direction === "down") {
        this.setState((prevState) => {
          return { currentMusicHomeItam: 0 }
        })
      } else if (this.state.currentMusicHomeItam <= 0 && direction === "up") {
        this.setState((prevState) => {
          return { currentMusicHomeItam: limit }
        })
      } else if (this.state.currentMusicHomeItam >= 0 && direction === "up") {
        this.setState((prevState) => {
          return { currentMusicHomeItam: prevState.currentMusicHomeItam - 1 }
        })
      }
    } else if (this.state.currentScreen === "cover") {
      if (this.state.currentCoverItam < limit && direction === "down") {
        this.setState((prevState) => {
          return { currentCoverItam: prevState.currentCoverItam + 1 }
        })
      } else if (this.state.currentCoverItam >= limit && direction === "down") {
        this.setState((prevState) => {
          return { currentCoverItam: 0 }
        })
      } else if (this.state.currentCoverItam <= 0 && direction === "up") {
        this.setState((prevState) => {
          return { currentCoverItam: limit }
        })
      } else if (this.state.currentCoverItam >= 0 && direction === "up") {
        this.setState((prevState) => {
          return { currentCoverItam: prevState.currentCoverItam - 1 }
        })
      } 
    } else /* if (this.state.currentScreen === "allSoung" || this.state.currentScreen === "home") */ {
      limit = 9
      if (this.state.allSoungItam < limit && direction === "down") {
        this.setState((prevState) => {
          return { allSoungItam: prevState.allSoungItam + 1 }
        })
      } else if (this.state.allSoungItam >= limit && direction === "down") {
        this.setState((prevState) => {
          return { allSoungItam: 0 }
        })
      } else if (this.state.allSoungItam <= 0 && direction === "up") {
        this.setState((prevState) => {
          return { allSoungItam: limit }
        })
      } else if (this.state.allSoungItam >= 0 && direction === "up") {
        this.setState((prevState) => {
          return { allSoungItam: prevState.allSoungItam - 1 }
        })
      } 
    }
  };
  render() {
    return <>
      <div className={`bg-slate-600 flex items-center justify-center w-screen h-screen flex-col `} style={{ "minHeight": "700px" }}>
        <IpodBody
          menuVisible={this.state.menuVisible}
          toggleMenu={this.toggleMenu}
          menuUpdate={this.menuUpdate}
          currentMenuItam={this.state.currentMenuItam}
          currentMusicHomeItam={this.state.currentMusicHomeItam}
          currentCoverItam={this.state.currentCoverItam}
          openNewPane={this.openNewPane}
          playPause={this.playPause}
          currentScreen={this.state.currentScreen}
          currentCover = {this.state.currentCover}
          musicData = {this.state.musicData}
          allSoungItam = {this.state.allSoungItam}
          play = {this.state.play}
          />
      </div>
    </>
  };
  async componentDidMount() {
    try {
      const response = await fetch('https://proxydeezer.onrender.com/chart');
      const data = await response.json();
      this.setState({musicData:data})
      
      return data.tracks.data;
    } catch (error) {
      console.error('Error fetching music data:', error);
      return [];
    }
  }
}

export default App;
