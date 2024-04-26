/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './backOffice.module.css';
import Logo from '../Logo/logo';
import PostUI from './Post/postUI';
import PostsList from './Posts.list/posts.list';

const BackOffice = () => {
  const [main, setMain] = useState<any>(); // Définition de main comme de type any
  const navigate = useNavigate();

  const [opened, { toggle }] = useDisclosure();

  const profilePage = () => {
    setMain('Prifile Page');
  };

  const postInterface = () => setMain(<PostUI />);

  const postsList = () => setMain(<PostsList />);


  const logOut = () => {
    navigate('/');
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Logo />
            <Group ml="xl" gap={0} visibleFrom="sm">
              {/* <UnstyledButton
                              className={classes.control}
                              onClick={home}
                            >Upload Article
                            </UnstyledButton> */}
              <UnstyledButton
                className={classes.control}
                onClick={postInterface}
              >Upload Article
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={postsList}
              >Article list
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={profilePage}
              >Profile
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={logOut}
              >Log Out
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton
          className={classes.control}
          onClick={postInterface}
        >Upload Article
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={postsList}
        >Admin
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={profilePage}
        >profile
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={logOut}
        >Log Out
        </UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        {main}
      </AppShell.Main>
    </AppShell>
  );
};
export default BackOffice;
