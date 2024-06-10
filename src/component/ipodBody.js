import { Component } from "react";
import { BodyBtn } from "./bodyBtn";
import { Screen } from "./screen/screen";


export class IpodBody extends Component {
    render() {
        return (<>
            <div style={{"minHeight": "700px"}} className="flex h-screen w-screen flex-col items-center justify-center bg-slate-100 ">
                <div
                    className="max-w-sm overflow-hidden rounded-3xl p-6 shadow-2xl shadow-neutral-950"
                    style={{
                        minWidth: "381px",
                        minHeight:"650px",
                        overflow: "visible",
                        background:
                            "linear-gradient(to right, transparent calc(100% - 15px), rgba(0, 0, 0, 0.5)), linear-gradient(to left, transparent calc(100% - 15px), rgba(0, 0, 0, 0.5)), linear-gradient(to top, transparent calc(100% - 15px), rgba(0, 0, 0, 0.5)), linear-gradient(transparent calc(100% - 15px), rgba(0, 0, 0, 0.5)), radial-gradient(transparent calc(100% - 20px), rgba(0, 0, 0, 0.5))",
                            "WebkitBoxReflect": "above 8px -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.2)))"
                    }}
                >
                    
                    <Screen menuVisible = {this.props.menuVisible}
                            currentMenuItam = {this.props.currentMenuItam}
                            currentMusicHomeItam = {this.props.currentMusicHomeItam}
                            currentCoverItam = {this.props.currentCoverItam}
                            currentScreen = {this.props.currentScreen}
                            currentCover = {this.props.currentCover}
                            musicData = {this.props.musicData}
                            allSoungItam = {this.props.allSoungItam}
                            play = {this.props.play}
                            allSoungItamTop = {this.props.allSoungItamTop}
                            />
                    
                    <BodyBtn 
                            menuVisible = {this.props.toggleMenu} 
                            menuUpdate = {this.props.menuUpdate}
                            openNewPane = {this.props.openNewPane}
                            playPause = {this.props.playPause}
                             />
                </div>
            </div>

        </>)
    }
}