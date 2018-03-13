import React, { Component } from 'react';
import Input from '../components/text/input';
import { Row, Grid } from 'react-native-easy-grid';
import Result from '../components/text/result';

class Display extends Component{
    render(){
        return(
            <Row size={40}>
               <Grid>
                   <Row size={2}>
                       <Input></Input>
                   </Row>
                   <Row size={1}>
                        <Result></Result>
                   </Row>
               </Grid>
            </Row>
        );
    }
}

export default Display;