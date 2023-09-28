import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Foryou from "../screens/Foryou"
import Fashion from "../screens/Fashion"

const Routes =()=>{

<Router>
  <Scene key='root'>

    <Scene key="foryou" component={Foryou} title="For You" initial={true}/>

    <Scene key="fashion" component={Fashion} title="Fashion" />

  </Scene>

</Router>

}

export default Routes