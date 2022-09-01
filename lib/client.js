import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '325gho7n',
    dataset: 'production',
    apiVersion: '2022-08-31',
    useCdn: true,
    token: 'pk'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
