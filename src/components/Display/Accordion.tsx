import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Accordion = ({title, inner}: AccordionProps) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((show: boolean) => !show);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>{title}</TouchableOpacity>
      {show && <View>{inner}</View>}
    </View>
  );
};

export interface AccordionProps {
  title: any;
  inner: any;
}

export default Accordion;

const styles = StyleSheet.create({});
