import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import withCounter from '../redux/actionCreator/withCounter';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {counter} = this.props;
        console.log('counter===', counter);

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.counterTitle}>Counter</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
                        <Text style={styles.buttonText}> - </Text>
                    </TouchableOpacity>

                    <Text style={styles.counterText}>{this.props.counter}</Text>

                    <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
                        <Text style={styles.buttonText}> + </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    // Action
    return {
        // Increase Counter
        reduxIncreaseCounter: () => dispatch({
            type: 'INCREASE_COUNTER',
            value: 1,
        }),
        // Decrease Counter
        reduxDecreaseCounter: () => dispatch({
            type: 'DECREASE_COUNTER',
            value: 1,
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (withCounter(Counter));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    counterText: {
        fontSize: 36,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
});
