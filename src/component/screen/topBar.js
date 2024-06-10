import React, { Component } from "react";
import { ReactComponent as EmptyBattery } from '../../assets/icons/battery-empty.svg';
import { ReactComponent as FullBattery } from '../../assets/icons/battery-full.svg';
import { ReactComponent as Battery1 } from '../../assets/icons/battery-1.svg';
import { ReactComponent as Battery2 } from '../../assets/icons/battery-2.svg';
import { ReactComponent as BatteryCharging } from '../../assets/icons/battery-charging.svg';
import { ReactComponent as BatteryError } from '../../assets/icons/batteryError.svg';

export class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            charging: false,
            level: 0,
            chargingTime: 0,
            dischargingTime: 0,
            batteryComponent: FullBattery,
            batterySupported: true,
            time: this.getCurrentTime()
        }
    }

    componentDidMount() {
        if ('getBattery' in navigator) {
            navigator.getBattery().then((battery) => {
                const updateBatteryStatus = () => {
                    let comp;
                    if (battery.charging === false) {
                        if ((battery.level * 100) > 90) {
                            comp = FullBattery;
                        } else if ((battery.level * 100) > 50) {
                            comp = Battery2;
                        } else if ((battery.level * 100) > 10) {
                            comp = Battery1;
                        } else {
                            comp = EmptyBattery;
                        }
                    } else {
                        comp = BatteryCharging;
                    }

                    this.setState({
                        charging: battery.charging,
                        level: battery.level,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                        batteryComponent: comp
                    });
                };

                // Initial update
                updateBatteryStatus();

                // Update the battery status when it changes
                battery.addEventListener('chargingchange', updateBatteryStatus);
                battery.addEventListener('levelchange', updateBatteryStatus);
                battery.addEventListener('chargingtimechange', updateBatteryStatus);
                battery.addEventListener('dischargingtimechange', updateBatteryStatus);
            }).catch((error) => {
                console.log('Error accessing battery status:', error);
                this.setState({ batterySupported: false });
            });
        } else {
            console.log('Battery Status API is not supported in this browser.');
            this.setState({ batterySupported: false });
        }
        // set an interval of 60 seconds to update time
        this.stateId = setInterval(() => {
            this.setState({ time: this.getCurrentTime() });
        }, 60000);
    }
    // fir getting current time in string
    getCurrentTime() {
        const today = new Date();
        let hours = today.getHours();
        const minutes = today.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
        hours = hours.toString().padStart(2, '0'); // Ensure hours are two digits
    
        return `${hours}:${minutes} ${ampm}`;
    }
    
    
    render() {
        const { batteryComponent: BatteryComponent, level, batterySupported } = this.state;

        return (
            <>
                <div className="min-w-full h-6 bg-gradient-to-t from-gray-300 via-gray-400 to-gray-100 border-b-2 border-gray-400 flex">
                    <div className="flex h-6 min-w-full border-b-2 border-gray-400 bg-gradient-to-t from-gray-300 via-gray-400 to-gray-100">
                        <div className="ml-1 text-xl my-auto text-gray text-slate-800">
                            <strong>iPod</strong>
                        </div>
                        <div className="text-s absolute ">
                            <strong className="time ml-32 text-white">{this.state.time}</strong>
                        </div>
                        <div className="text-xs ml-auto my-auto mr-2 text-gray-800 flex">
                            {batterySupported ? (
                                <>
                                    <strong className="m-auto">
                                        <span className="text-xs">{Math.round(level * 100)}%</span>
                                    </strong>
                                    <strong>
                                        <BatteryComponent height="25" width="25" />
                                    </strong>
                                </>
                            ) : (<>
                                <strong className="m-auto">
                                    <span className="text-xs">
                                        Battery status Error🙄 
                                    </span>
                                </strong>
                                <strong>
                                    <BatteryError height="25" width="25" />
                                </strong>
                            </>

                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
