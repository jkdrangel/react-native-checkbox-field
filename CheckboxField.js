import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './Styles';
import Checkbox from './Checkbox';

export default class CheckboxField extends Component {
  static propTypes = {
    // CheckboxField
    label: PropTypes.string,
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    labelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    labelSide: PropTypes.oneOf(['left', 'right']),

    // Checkbox
    defaultColor: PropTypes.string,
    selectedColor: PropTypes.string,
    disabledColor: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    checkboxStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    containerStyle: {
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
    },
    label: null,
    labelStyle: {
      flex: 1,
    },
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    disabledColor: Styles.disabledColor,
    selectedColor: Styles.selectedColor,
    labelSide: 'left',
    disabled: false,
    selected: false,
  };

  render() {
    const {
      onSelect,
      disabled,
      containerStyle,
      labelSide,
      labelStyle,
      label,
      selected,
      defaultColor,
      selectedColor,
      disabledColor,
      checkboxStyle,
      children,
    } = this.props;

    return (
      <TouchableOpacity onPress={onSelect} disabled={disabled}>
        <View style={containerStyle}>
          {
            labelSide === 'left' ? <Text style={labelStyle}>{label}</Text> : null
          }
          <Checkbox
            selected={selected}
            disabled={disabled}
            onSelect={onSelect}
            defaultColor={defaultColor}
            selectedColor={selectedColor}
            disabledColor={disabledColor}
            checkboxStyle={checkboxStyle}
          >
            {children}
          </Checkbox>
          {
            labelSide === 'right' ? <Text style={[labelStyle, { textAlign: 'right' }]}>{label}</Text> : null
          }
        </View>
      </TouchableOpacity>
    );
  }
}
