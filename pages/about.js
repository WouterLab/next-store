import About from "../components/About/About";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <About />
    </motion.div>
  );
}
