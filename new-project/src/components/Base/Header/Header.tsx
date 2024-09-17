import { Container } from '../../UI';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import classes from './Header.module.scss';
import homeIcon from '../../../assets/home.svg';
import { CustomModal } from '../../CustomModal/CustomModal';
import { Login } from '../Login/Login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navBar } from '../../../common/constans';
import { ThemeSwitch } from '../../UI/ThemeSwitch/ThemeSwitch';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const user = localStorage.getItem('user');
  const navigate = useNavigate()
  const handleExit = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <>
      <Container>
        <nav className={classes.wrapper}>
          <Link to={'/'}>
            <img src={homeIcon} alt="home" />
          </Link>
          <div className={classes.navbar}>
            {navBar.map((navEl, i) => (
              <Link to={navEl.url} key={i}>
                {navEl.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          {!user ?
            <Button variant="contained" onClick={() => handleOpen()}>
              Sign up
            </Button>
            : <Button onClick={() => navigate('/profile')}>Profile</Button>
          }
        </nav>
      </Container>
      <CustomModal open={open} handleClose={handleClose}>
        <Login />
      </CustomModal>
    </>
  );
};
