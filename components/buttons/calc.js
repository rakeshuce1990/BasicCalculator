import styles from '../styles';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions';
import { Col } from 'react-native-easy-grid';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Calc extends Component {
    renderGrid(calculate){
        const { id, val } = calculate[0];
        return( <Col size={2} key={id} style={styles.calcCell}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={ ()=> this.props.Calculate()} >
                            <Text style={styles.keypad}>{val}</Text>
                        </TouchableOpacity>
                    </View>
                </Col>
        );
    }

    render(){
        const calculate = this.props.calculate;
        return(
            this.renderGrid(calculate)
        );
    }
}


const mapStateToProps = state => {
    return { calculate: state.calculate };
};
export default connect(mapStateToProps, actions)(Calc);