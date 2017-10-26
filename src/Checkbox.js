import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../Styles';

export default class Checkbox extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    defaultColor: PropTypes.string,
    selectedColor: PropTypes.string,
    disabledColor: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    checkboxStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  };

  static defaultProps = {
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    selectedColor: Styles.selectedColor,
    disabledColor: Styles.disabledColor,
    disabled: false,
    selected: false,
  };

  render() {
    const {
      disabled,
      disabledColor,
      selected,
      selectedColor,
      defaultColor,
      onSelect,
      checkboxStyle,
      children,
    } = this.props;
    const baseColor = selected ? selectedColor : defaultColor;
    const backgroundColor = {
      backgroundColor: disabled ? disabledColor : baseColor,
    };

    return (
      <TouchableOpacity disabled={disabled} style={[checkboxStyle, backgroundColor, styles.center]} onPress={onSelect}>
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
