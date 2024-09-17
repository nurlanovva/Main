import { ReactNode, FC } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};
