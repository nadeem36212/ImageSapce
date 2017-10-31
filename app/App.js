import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
 import GreyScreen from './Components/GreyScreen';
import ScarletScreen from './Components/ScarletScreen';

export default class ImageSpace extends Component {
    render() {
        return (
                <Router>
                    <Scene
                        key="root"
                        hideNavBar
                    >
                        <Scene
                            key="ss"
                            component={ScarletScreen}
                            title=""
                            direction="horizontal"
                            initial
                            duration={0}
                        />

                        <Scene
                            key="gs"
                            component={GreyScreen}
                            title=""
                            direction="horizontal"
                            initial
                            duration={0}
                        />
                    </Scene>
                </Router>
        );
    }
}
