import styles from '../styles';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions';
import { Col } from 'react-native-easy-grid';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Operators extends Component {
    renderGrid(operators){
        let cols = [];
        for(var i = 0; i < 4; i++){
            const { id, val, type } = operators[i];
            cols.push(  <Col key={id} style={styles.mathCell}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={ ()=> this.props.selectOperator(val, type)}>
                                    <Text style={styles.keypad}>{val}</Text>
                                </TouchableOpacity>
                            </View>
                        </Col>
                      );
        }
        return cols;
    }

    render(){
        const operators = this.props.operators;
        return(
            this.renderGrid(operators)
        );
    }
}

const mapStateToProps = state => {
    return { operators: state.operators };
};
export default connect(mapStateToProps, actions)(Operators);