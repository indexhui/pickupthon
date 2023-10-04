import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import semanticTokens from 'theme/semanticTokens';
import textStyles from './textStyles';

const theme = extendTheme({
  colors,
  semanticTokens,
  textStyles,
  fonts: {
    heading: `'Montserrat','-apple-system','BlinkMacSystemFont', 'Noto Sans TC','PingFang TC','Noto Sans TC','Microsoft JhengHei'`,
    body: `'Montserrat','-apple-system','BlinkMacSystemFont ', 'Noto Sans TC','PingFang TC','NotoSansCJK','NotoSansCJK','Microsoft JhengHei'`,
  },
});

export default theme;
