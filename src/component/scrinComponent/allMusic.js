import { Component } from "react";

export class AllMusic extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidUpdate(prevProps) {
        const { allSoungItam,allSoungItamTop } = this.props;
        if(allSoungItamTop){
            const menuElement = document.getElementById("allSongList");
            const listItem = menuElement.querySelector(`#top`);
            if (listItem) {
                listItem.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (prevProps.allSoungItam !== allSoungItam) {
            const menuElement = document.getElementById("allSongList");
            const listItem = menuElement.querySelector(`#list${allSoungItam}`);
            if (listItem) {
                listItem.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
    render() {
        const {musicData,allSoungItam} = this.props
        console.log(allSoungItam)
        return (<>
            
            <div id="allSongList" className="bg-gray-100 p-6 min-h-full min-w-full">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-0.5 justify-center">
                    <div id="top"></div>
                    {musicData.tracks.data.map((element,index)=>{
                            return (<div key={index} id={`list${index}`} className="folder flex flex-col items-center w-[calc(33.33%-2px)] px-0.5 mb-6">
                                <div className={`bg-white rounded p-2 shadow flex flex-col items-center ${index===allSoungItam && "text-white bg-gradient-to-r from-sky-300 via-blue-600 to-blue-900 border-b border-black-60 "}`}>
                                    <div
                                        className="icon mb-2 h-12 w-12 rounded-t-md bg-yellow-500"
                                        style={{
                                            backgroundImage:
                                                `url(${element.album.cover_small})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center"
                                        }}
                                    />
                                    <p className="font-semibold  text-xs truncate w-16">{element.title_short}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>

        </>)
    }
}