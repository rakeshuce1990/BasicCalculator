import styles from '../styles';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions';
import { Row, Col, } from 'react-native-easy-grid';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Numbers extends Component {
    
    renderGrid(numbers){
        
        let rows = [];
        for(var i = 0 ; i < 4 ; i++){
            let cols = [];
            for(var j = 0; j < 3 ; j++){
                const { id, val } = numbers[i*3+j];
                cols.push(  <Col key={id} style={styles.buttonCell}>
                                <View style={styles.container}>
                                    <TouchableOpacity onPress={ ()=> this.props.selectButton(val)}>
                                        <Text style={styles.keypad}>{val}</Text>
                                    </TouchableOpacity>
                                </View>
                            </Col>
                        );
            }
            rows.push(<Row size={1}>{cols}</Row>);
        }

        return rows;
    }

    render(){
        const numbers = this.props.numbers;
        return(
            this.renderGrid(numbers)
        );
    }
}

const mapStateToProps = state => {
    return { numbers: state.numbers };
};
export default connect(mapStateToProps, actions)(Numbers);