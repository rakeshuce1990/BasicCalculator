import styles from '../styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import React, { Component } from 'react';
import { Col } from 'react-native-easy-grid';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Clear extends Component {
    renderGrid(clear){
        
        let cols = [];
        for(var i = 0; i < 2; i++){
            const { id, val } = clear[i];
            cols.push(  <Col size={1} style={styles.buttonCell}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={ ()=> this.props.clearData(id)}>
                                    <Text style={styles.keypad}>{val}</Text>
                                </TouchableOpacity>
                            </View>
                        </Col>
            );
        }
        return cols;
    }

    render(){
        const clear = this.props.clear;
        return(
            this.renderGrid(clear)
        );
    }
}


const mapStateToProps = state => {
    return { clear: state.clear };
};
export default connect(mapStateToProps, actions)(Clear);