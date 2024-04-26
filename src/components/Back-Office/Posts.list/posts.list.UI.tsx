/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Container } from '@mantine/core';
import Postslist from './posts.list.stack';
import PostListButtons from './post.list.butons';

const PostsListUI = () => {
    return (
        <>
            <Container>
                <Postslist />
                <PostListButtons />
            </Container>
        </>
    );
};

export default PostsListUI;
