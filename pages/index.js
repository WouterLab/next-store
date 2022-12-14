import Home from "../components/Home/Home";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Home />
    </motion.div>
  );
}
