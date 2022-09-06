import Reviews from "../components/Reviews/Reviews";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Reviews />
    </motion.div>
  );
}
