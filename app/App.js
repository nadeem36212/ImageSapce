import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
 import GreyScreen from './Components/GreyScreen';
import CameraScreen from './Components/CameraScreen';
import HomeScreen from './Components/HomeScreen';
import TopCategoryTab from './Components/TopCategoryTab';
import LatestStyleTab from './Components/LatestStyleTab';
import CustomerDashboard from './Components/CustomerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import CustomerOrder from './Components/CustomerOrder';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

export default class ImageSpace extends Component {
    render() {
        return (
                <Router>
                    <Scene
                        key="root"
                        hideNavBar
                    >
                    <Scene
                        key="Login"
                        component={Login}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="SignUp"
                        component={SignUp}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="HomeScreen"
                        component={HomeScreen}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="CameraScreen"
                        component={CameraScreen}
                        title=""
                        direction="horizontal"
                        initial
                        duration={0}
                    />
                    <Scene
                        key="TopCategoryTab"
                        component={TopCategoryTab}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="LatestStyleTab"
                        component={LatestStyleTab}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="CustomerDashboard"
                        component={CustomerDashboard}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="AdminDashboard"
                        component={AdminDashboard}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="CustomerOrder"
                        component={CustomerOrder}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="gs"
                        component={GreyScreen}
                        title=""
                        direction="horizontal"
                        duration={0}
                    />
                    </Scene>
                </Router>
        );
    }
}
