import { Component } from "react";
import { TopBar } from "./topBar";
import { Menu } from "./menu";
import { MusicHome } from "../scrinComponent/musicHome";
import { Cover } from "../scrinComponent/cover";
import { AllMusic } from "../scrinComponent/allMusic";
import { CurrentMusic } from "../scrinComponent/currentMusic";

import img1 from "../../assets/image/wallpaper1.jpg";
import img2 from "../../assets/image/wallpaper2.jpg";
import img3 from "../../assets/image/wallpaper3.jpg";

export class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: img1,
            props:props.menuVisible
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.menuVisible){
            const menuElement = document.getElementById("scrinFrom");
            const listItem = menuElement.querySelector(`#topBar`);
            if (listItem) {
                listItem.scrollIntoView({ behavior: "smooth" });
            }
        }


        if (prevProps.currentCover !== this.props.currentCover) {
            this.updateBackgroundImage();
        }
    }
    updateBackgroundImage() {
        const { currentCover } = this.props;
        let imgSrc = img1;
        if (currentCover === 1) {
            imgSrc = img2;
        } else if (currentCover === 2) {
            imgSrc = img3;
        }
        this.setState({ img: imgSrc });
    }
    render() {
        const { currentScreen } = this.props
        return (

            <>
                
                <div id="scrinFrom"
                    className="h-64 w-full rounded border-8 border-gray-700 relative overflow-hidden"
                    style={{ backgroundImage: `url(${this.state.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute w-full h-full bg-transparent"></div>
                    <div id="topBar"></div>
                    <TopBar />
                    <Menu
                        menuVisible={this.props.menuVisible}
                        currentMenuItam={this.props.currentMenuItam}
                    />
                    
                    {/* {(currentScreen === "home" || currentScreen === "home") && <CurrentMusic 
                    musicData = {this.props.musicData}
                    allSoungItam = {this.props.allSoungItam} />} */}
                    {/* <audio controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src="horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio> */}
                    {currentScreen === "musicHome" && <MusicHome
                        currentMusicHomeItam={this.props.currentMusicHomeItam} />}
                    {currentScreen === "allSoung" && <AllMusic
                        allSoungItam={this.props.allSoungItam} 
                        musicData={this.props.musicData} />}

                    {currentScreen === "cover" && <Cover
                        currentCoverItam={this.props.currentCoverItam} />}
                    
                    <CurrentMusic 
                    musicData = {this.props.musicData}
                    allSoungItam = {this.props.allSoungItam}
                    play = {this.props.play} />
                </div>
            </>
        );
    }
}
