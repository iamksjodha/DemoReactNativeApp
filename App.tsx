import React from 'react';
import {NativeBaseProvider} from 'native-base';

import theme from './src/theme';
import SignUp from './src/pages/SignUp';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SignUp />
    </NativeBaseProvider>
  );
};

export default App;
