import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"
import React, { Component } from "react";

interface ButtonProps extends TouchableOpacityProps {
    text?: string;
}

const Button = (props: ButtonProps) => {
    return <TouchableOpacity activeOpacity={.6} {...props} style={[styles.button, props.style]}>
        <Text style={styles.buttonTxt}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#3CCBFF',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTxt: {
        color: 'white',
        fontSize: 16,
    }
})