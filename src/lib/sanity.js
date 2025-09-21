// src/lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'og6t9206', // Tu Project ID de Sanity
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  token: '', // Deja vacío para acceso público de lectura
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};