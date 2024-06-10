import React, { Component } from "react";
import { ReactComponent as BackwardIcon } from '../assets/icons/backword-btn.svg';
import { ReactComponent as ForwardIcon } from '../assets/icons/forward-btn.svg';
import { ReactComponent as PlayPause } from '../assets/icons/play-pause-btn.svg';
import style from "../assets/style/bodyBtn.module.css";

export class BodyBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTopActive: false,
            isBottomActive: false,
            isLeftActive: false,
            isRightActive: false
        };
    }

    handleMouseDown = (expression) => {
        switch(expression) {
            case "top":
              // code block
              this.setState({ isTopActive: true });
              break;
            case "bottom":
              // code block
              this.setState({ isBottomActive: true });
              break;
            case "left":
              // code block
              this.setState({ isLeftActive: true });
              break;
            case "right":
              // code block
              this.setState({ isRightActive: true });
              break;
            default:
              // code block
          }
        
    };

    handleMouseUp = (expression) => {
        
        switch(expression) {
            case "top":
              // code block
              this.setState({ isTopActive: false });
              break;
            case "bottom":
              // code block
              this.setState({ isBottomActive: false });
              break;
            case "left":
              // code block
              this.setState({ isLeftActive: false });
              break;
            case "right":
              // code block
              this.setState({ isRightActive: false });
              break;
            default:
              // code block
          }
    };

    render() {
        const { isTopActive, isBottomActive, isLeftActive, isRightActive} = this.state;

        return (
            <div className="bor bg-transparent px-6 py-4 ">
                <div className={`w-64 h-64 relative border m-auto rounded-full mt-11 mb-4 bg-white 
                ${isTopActive ? style["btn-top-contener"] : ""}
                ${isBottomActive ? style["btn-bottom-contener"] : ""}
                ${isLeftActive ? style["btn-left-contener"] : ""}
                ${isRightActive ? style["btn-right-contener"] : ""}`}>
                    <button onDoubleClick={this.props.openNewPane} onClick={this.props.openNewPane} className={`w-32 h-32 border rotate-45 border-x-4 border-slate-200  absolute m-16 rounded-full bg-slate-100 ${style["center-btn-press"]}`} />
                    <button onClick={this.props.menuVisible} 
                        className={`absolute mx-12 mt-0 w-40 h-16 flex z-10 text-slate-400 text-2xl ${style["btn-press"]}`}
                        onMouseDown={()=>{this.handleMouseDown("top")}}
                        onMouseUp={()=>{this.handleMouseUp("top")}}
                        onMouseLeave={()=>{this.handleMouseUp("top")}} // Add this to handle mouse leaving while mouse button is pressed
                    >
                        <samp className="m-auto colo">
                            <strong>MENU</strong>
                        </samp>
                    </button>
                    <button className={`absolute mt-16 w-16 h-32 flex z-10 text-slate-400 text-2xl ${style["btn-press"]}`} 
                    onClick={()=>{this.props.menuUpdate("up")}}

                    onMouseDown={()=>{this.handleMouseDown("left")}}
                    onMouseUp={()=>{this.handleMouseUp("left")}}
                    onMouseLeave={()=>{this.handleMouseUp("left")}}>
                        <i className=" m-auto">
                            <BackwardIcon width="44" height="44" className="text-2xl text-blue-500" />
                        </i>
                    </button>
                    <button className={`absolute ml-48 mt-16 w-16 h-32 flex z-10 text-slate-400 text-2xl ${style["btn-press"]}`}
                    onClick={()=>{this.props.menuUpdate("down")}}

                    onMouseDown={()=>{this.handleMouseDown("right")}}
                    onMouseUp={()=>{this.handleMouseUp("right")}}
                    onMouseLeave={()=>{this.handleMouseUp("right")}}>
                        <i className=" m-auto"><ForwardIcon width="44" height="44" /></i>
                    </button>
                    <button className={`absolute mx-12 mt-48 w-40 h-16 flex z-10 text-slate-400 text-2xl ${style["btn-press"]}`}
                    onClick={this.props.playPause}
                    onMouseDown={()=>{this.handleMouseDown("bottom")}}
                    onMouseUp={()=>{this.handleMouseUp("bottom")}}
                    onMouseLeave={()=>{this.handleMouseUp("bottom")}}>
                        <i className=" m-auto"><PlayPause width="44" height="44" /></i>
                    </button>
                </div>
            </div>
        );
    }
}
