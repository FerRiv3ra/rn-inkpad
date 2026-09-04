import MDXComponents from '@theme-original/MDXComponents';
import Snack from '@site/src/components/Snack';

// Makes <Snack /> available in every .md/.mdx page without importing it.
export default {
  ...MDXComponents,
  Snack,
};
