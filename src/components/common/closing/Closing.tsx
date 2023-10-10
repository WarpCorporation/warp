import { ReactNode } from 'react';
import { CSC } from '../styled';

type PropsType = {
  shouldClose: boolean;
  children: ReactNode;
};

const Closing = (props: PropsType) => {
  const { shouldClose, children } = props;

  if (!shouldClose) return <>{children}</>;

  return (
    <>
      {children}
      <CSC.Closing
        shouldClose={shouldClose}
        isTop
        className={shouldClose ? 'top-closing-animation' : ''}
      />
      <CSC.Closing
        shouldClose={shouldClose}
        className={shouldClose ? 'bottom-closing-animation' : ''}
      />
    </>
  );
};

export default Closing;
