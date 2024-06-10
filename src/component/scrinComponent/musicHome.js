import { Component } from "react";
import allSong from "../../assets/image/allSong.webp";
import artist from "../../assets/image/Artist.jpg";
import album from "../../assets/image/album.jpg";

export class MusicHome extends Component {
    constructor() {
        super();
        this.state = {};
        this.selected = {
            background: "linear-gradient(rgb(155, 223, 255) 5%, #509fee, #1e90ff)",
            borderBottom: "rgb(0, 0, 0, 0.6) solid 1px",
            color: "white"
        };
    }

    render() {
        const { currentMusicHomeItam:currentMenuItam } = this.props;
        
        // Conditionally apply styles to the second folder

        return (
            <div className="bg-gray-100 p-6 min-h-full min-w-full">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-0.5 justify-center">
                        <div className="folder flex flex-col items-center w-[calc(33.33%-2px)] px-0.5 mb-6">
                            <div className={`bg-white rounded p-2 shadow flex flex-col items-center ${currentMenuItam===0 && "text-white bg-gradient-to-r from-sky-300 via-blue-600 to-blue-900 border-b border-black-60 "}`}>
                                <div className="icon mb-2 h-12 w-12 rounded-t-md bg-yellow-500" style={{ backgroundImage: `url(${allSong})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <p className="font-semibold  text-sm">
                                All Songs</p>
                            </div>
                        </div>
                        <div className="folder flex flex-col items-center w-[calc(33.33%-2px)] px-0.5 mb-6">
                            <div className={`bg-white rounded p-2 shadow flex flex-col items-center ${currentMenuItam===1&&"text-white bg-gradient-to-r from-sky-300 via-blue-600 to-blue-900 border-b border-black-60 "}`}>
                                <div className="icon mb-2 h-12 w-12 rounded-t-md bg-yellow-500" style={{ backgroundImage: `url(${artist})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <p className="font-semibold  text-sm">
                                Artist
                                </p>
                            </div>
                        </div>
                        <div className="folder flex flex-col items-center w-[calc(33.33%-2px)] px-0.5 mb-6">
                            <div className={`bg-white rounded p-2 shadow flex flex-col items-center ${currentMenuItam===2&&"text-white bg-gradient-to-r from-sky-300 via-blue-600 to-blue-900 border-b border-black-60 "}`}>
                                <div className="icon mb-2 h-12 w-12 rounded-t-md bg-yellow-500" style={{ backgroundImage: `url(${album})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <p className="font-semibold  text-sm">
                                Albums
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
