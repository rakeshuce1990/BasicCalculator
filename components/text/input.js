import styles from '../styles';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Input extends Component {
    
    render(){
        const { expression } = this.props.input;
            return(
                <View style={styles.container}>
                    <Text style={styles.input}>{expression}</Text>
                </View>
            );
    }
}


const mapStateToProps = state => {
    return { input: state.selectedId };
};
export default connect(mapStateToProps)(Input);