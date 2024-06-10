import { Component } from "react";
import "../../assets/style/menu.css";

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuVisible: false
        };
    }

    componentDidUpdate(prevProps) {
        const { currentMenuItam } = this.props;
        if (prevProps.currentMenuItam !== currentMenuItam) {
            const menuElement = document.getElementById("menue");
            if (menuElement) {
                if (currentMenuItam === 3) {
                    menuElement.scrollTo(0, 50);
                } else {
                    menuElement.scrollTo(50, 0);
                    /* scrollIntoView() */
                }
            }
        }
    }

    render() {
        const { menuVisible, currentMenuItam } = this.props;
        return (
            <div
                id="menue"
                className={`ipod-menu border-gray-400 bg-gradient-to-l from-gray-300 via-gray-400 to-gray-100 ${menuVisible ? 'show' : ''} absolute z-10 min-h-52 `}
            >
                <div className={`menu-header text-slate-100`}>
                    <h1>Menu</h1>
                </div>
                <ul className={`menu-items`}>
                    <li id="1" className={`menu-item ${currentMenuItam === 0 ? "selected" : ''}`}><strong>Music</strong></li>
                    <li id="2" className={`menu-item ${currentMenuItam === 1 ? "selected" : ''}`}><strong>Cover</strong></li>
                    <li id="3" className={`menu-item ${currentMenuItam === 2 ? "selected" : ''}`}><strong>Game</strong></li>
                    <li id="4" className={`menu-item ${currentMenuItam === 3 ? "selected" : ''}`}><strong>Settings</strong></li>
                </ul>
            </div>
        );
    }
}
