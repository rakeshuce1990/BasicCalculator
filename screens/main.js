import React, { Component } from 'react';
import { Row, Grid } from 'react-native-easy-grid';

import KeyPad from './keypad';
import Display from './display';

class Main extends Component{
    render(){
        return(
            <Grid>
              <Row size={40}>
                <Display></Display>
              </Row>
              <Row size={60}>
                <KeyPad></KeyPad>
              </Row>
            </Grid>
        );
    }
}

export default Main;