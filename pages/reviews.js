import Reviews from '../components/Reviews/Reviews';
import { motion } from 'framer-motion';

export default function ReviewsPage({ reviews }) {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Reviews reviews={reviews} />
    </motion.div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=9'
  );
  const data = await response.json();

  return {
    props: {
      reviews: data,
    },
  };
}
