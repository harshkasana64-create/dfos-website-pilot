import { type SchemaTypeDefinition } from 'sanity';
import { seoType } from './seo';
import { productType } from './product';
import { solutionType } from './solution';
import { blogPostType } from './blogPost';

export const schemaTypes: SchemaTypeDefinition[] = [
  seoType,
  productType,
  solutionType,
  blogPostType,
];
