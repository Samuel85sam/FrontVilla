import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CRUD from '@/Business/API-requests/C.R.U.D./CRUD';
import { Post } from '@/Types-Interfaces/CRUD-Types/CRUD.types';
import { Button, Card, Stack } from '@mantine/core';

const Postslist = () => {
  const navigate = useNavigate();
  const [posts, setpost] = useState<Post[]>([]);
  const allPosts = async () => {
    const posts = await CRUD.getForm('posts/', { populate: ['img', 'author'] });
    if (posts !== undefined && Array.isArray(posts)) {
      //console.log({ posts });

      setpost(posts);
    }
  };
  const deletePost = async (postId: Post['_id']) => {
    const route = `posts/${postId}`;
    const response = await CRUD.deleteFormById(route);
    if (response?.status === 401) {
      navigate('auth/');
    }
    allPosts();
  };

  const redirect = (route: string) => {
    navigate(route);
  };

  useEffect(() => {
    allPosts();
  }, []);

  if (posts.length !== 0) {
    return (
      <>
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="stretch"
          justify="center"
          gap="lg"
        >
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
        </Stack>
      </>
    );
  }
    return (
      <>
        <Card>
          aucun post à afficher
        </Card>

      </>
    );
};

export default Postslist;
