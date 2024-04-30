import { useEffect, useState } from 'react';

import {
    Card,
    SimpleGrid,
    GridCol,
} from '@mantine/core';
import { Img } from '@/Types-Interfaces/CRUD.types';
import CRUD from '@/Business/API-requests/C.R.U.D./CRUD';
import { getImageUrl } from '@/Utils/img';
import classes from './gallery.module.css';

const Gallery = () => {
    const [imgs, setImgs] = useState<Img[]>([]);

    const getImgTab = async () => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const imgs = await CRUD.getImgs('imgs/');
        if (imgs !== undefined && Array.isArray(imgs)) {
            setImgs(imgs);
        }
    };
//TODO: upgrade templating

    const galleryMap = imgs.map((img) => (
        <Card
          radius="sm"
          key={img.fileName + img.originalname}
          className={classes.img}
        >
            <img
              src={getImageUrl(img)}
              alt={img.originalname} />
        </Card>
    ));

    useEffect(() => {
        getImgTab();
    }, []);

    return (
        <>
            <Card withBorder radius="xs" className={classes.card}>
                <SimpleGrid cols={3} mt="md">
                    {galleryMap}
                </SimpleGrid>
            </Card>
        </>
    );
};

export default Gallery;
