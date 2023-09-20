import { useCallback } from 'react';

export function useCustomButton() {
  const handleClick = useCallback(() => {
    // This alert is example of how to use env variables
    // eslint-disable-next-line no-alert
    window.alert(process.env.NEXT_PUBLIC_PUSHER_MY_APP_VALUE || 'No env value');
  }, []);
  return {
    handleClick,
  } as const;
}
