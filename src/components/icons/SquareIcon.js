import { Icon } from '@chakra-ui/react';

export function SquareIcon(props) {
  return (
    <Icon viewBox="0 0 32 32" w="32px" h="32px" fill="none" {...props}>
      <rect x="5" y="5" width="22" height="22" rx="4" fill="#ED662D" />
    </Icon>
  );
}
