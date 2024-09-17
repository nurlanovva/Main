import classes from './UserCard.module.scss';
import user from '../../../assets/user.svg';
import { FC, useState } from 'react';
import { CustomModal } from '../../CustomModal/CustomModal';

interface UserCardProps {
  userData: {
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}
export const UserCard: FC<UserCardProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { userData } = props;

  return (
    <>
      <div className={classes.wrapper} onClick={() => handleOpen()}>
        <img src={user} alt="user" className={classes.img} />
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
        <div>
          <p>{userData.company.name}</p>
          <p>{userData.company.catchPhrase}</p>
        </div>
      </div>
      <CustomModal open={open} handleClose={handleClose}>
        123
      </CustomModal>
    </>
  );
};
