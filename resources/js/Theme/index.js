import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './foundations/colors';
import typography from './foundations/typography';

import Button from './components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
import Heading from './components/heading';
import Input from './components/input';
import FormLabel from './components/form-label';
import SubHeading from './components/sub-heading';

const overrides = extendTheme({
  styles,
  colors,
  ...typography,
  components: {
    Button,
    Card,
    Checkbox,
    FormLabel,
    Heading,
    Input,
    SubHeading,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'ck',
  },
});

export default overrides;
