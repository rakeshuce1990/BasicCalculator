import React, { Component } from 'react';
import Calc from '../components/buttons/calc';
import Clear from '../components/buttons/clear';
import Numbers from '../components/buttons/numbers';
import Operators from '../components/buttons/operators';
import { Row, Col, Grid } from 'react-native-easy-grid';

class KeyPad extends Component{
    render(){
        return(
            <Grid>
              <Row size={1}>
                <Clear></Clear>
                <Calc></Calc>
              </Row>
              <Row size={4}>
                <Grid>
                  <Col size={3}>
                    <Numbers></Numbers>
                  </Col>
                  <Col size={1}>
                    <Operators></Operators>
                  </Col>
                </Grid>
              </Row>
            </Grid>
        );
    }
}


export default KeyPad;