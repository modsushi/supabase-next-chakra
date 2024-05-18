import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import MDXLayout from '@/components/MDXLayout';
import BLOGPOSTS from '@/utils/blogposts';

export default function BlogPost() {
  const router = useRouter();
  const slug = router.query.slug;
  const metadata = BLOGPOSTS.find(post => post.params.slug === slug);
  console.log(slug);

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  const MDXPage = dynamic(() => import (`../../posts/${slug}.mdx`))
  return (<MDXLayout {...metadata.params}><MDXPage /></MDXLayout>)
}

export const getStaticPaths = async () => {
  const paths = BLOGPOSTS

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  return {
    props: { slug },
  };
}