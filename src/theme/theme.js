import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import semanticTokens from 'theme/semanticTokens';
import textStyles from './textStyles';

const theme = extendTheme({
  colors,
  semanticTokens,
  textStyles,
  fonts: {
    heading: `'Montserrat','-apple-system','BlinkMacSystemFont ','PingFang TC','NotoSansCJK','Microsoft JhengHei'`,
    body: `'Montserrat','-apple-system','BlinkMacSystemFont ','PingFang TC','NotoSansCJK','Microsoft JhengHei'`,
  },
});

export default theme;
