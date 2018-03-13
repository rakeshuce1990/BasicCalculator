import styles from '../styles';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Result extends Component {
    render(){
        const { result } = this.props.result;
        return(
            <View style={styles.container}>
                <Text style={styles.result}>{result}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { result: state.selectedId };
};
export default connect(mapStateToProps)(Result);