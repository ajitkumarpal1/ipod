import { Component, createRef } from "react";
import "../../assets/style/audio.css";

export class CurrentMusic extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allSoungItam !== this.props.allSoungItam) {
            if (this.audioRef.current) {
                this.audioRef.current.load(); // Reload the audio element with the new source
            }
        }

        if (prevProps.play !== this.props.play) {
            if (this.props.play) {
                this.audioRef.current.play();
            } else {
                this.audioRef.current.pause();
            }
        }
    }

    render() {
        const { musicData, allSoungItam } = this.props;

        if (!musicData || !musicData.tracks || !musicData.tracks.data || musicData.tracks.data.length === 0) {
            return (<>
            <>
                    <div className="">
                        
                        <div className="w-72 h-32 rounded-md mt-2 mx-auto overflow-hidden bg-gray-300 animate-pulse" />
                        <div className="w-72 h-12 mt-4 mx-auto rounded-full bg-gray-300 animate-pulse " />
                    </div>
                </>
            </>);
        }
        const track = musicData.tracks.data[allSoungItam];
        

        return (
            <>
                <div className="">
                    <div
                        className="w-72 h-32 rounded-md mt-2 mx-auto overflow-hidden"
                        style={{ backgroundImage: `url(${track.album.cover_big})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <audio ref={this.audioRef} controls className="m-auto mt-4 relative" autoPlay>
                        <source src={track.preview} type="audio/ogg" />
                        <source src={track.preview} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </>
        );
    }
}
