/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardSection, Stack } from '@mantine/core';
import CRUD from '@/Business/API-requests/C.R.U.D./CRUD';
import { Post } from '@/Types-Interfaces/CRUD.types';

const Postslist = () => {
  const navigate = useNavigate();
  const [posts, setpost] = useState<Post[]>([]);
  const allPosts = async () => {
    const posts = await CRUD.getPost('posts/', { populate: ['img', 'author'] });
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
        <Card>
          <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="lg"
          >
            {posts.map((post) => (
              <CardSection
                key={post._id}
              >
                {/* {post.type}
                {post.author}
                {post.title}
                {post.body}
                {post.img} */}
                <Button
                  color="error"
                  onClick={() => deletePost(post._id)}
                  size="small"
                >
                  SUPPRIMER
                </Button>
                <Button
                  color="info"
                  onClick={() => redirect(`/posts/${post._id}`)}
                  size="small"
                >
                  Update
                </Button>
              </CardSection>
            ))}
          </Stack>
        </Card>
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
