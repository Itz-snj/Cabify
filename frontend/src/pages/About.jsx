import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackToTopButton from "../components/BackToTopButton";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1 className="text-5xl font-bold mb-4" variants={fadeIn}>
          About Cabify
        </motion.h1>
        <motion.p className="text-xl max-w-2xl mx-auto" variants={fadeIn}>
          Redefining your transportation experience
        </motion.p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-center max-w-3xl mx-auto"
            variants={fadeIn}
          >
            At Cabify, we aim to transform urban mobility by providing seamless, reliable, and safe transportation.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { title: "Safety First", desc: "Rigorous driver checks and app safety features.", icon: "🛡️" },
              { title: "Reliability", desc: "Timely pickups and efficient routes.", icon: "⏳" },
              { title: "Sustainability", desc: "Optimized routes to reduce environmental impact.", icon: "🌱" },
              { title: "Community", desc: "Supporting drivers and local communities.", icon: "🤝" }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={itemAnimation}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            How Cabify Works
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            variants={staggerContainer}
          >
            {["Request a Ride", "Get Matched", "Track Your Ride", "Arrive Safely"].map((step, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-full h-40 w-40 flex flex-col items-center justify-center text-center"
                variants={itemAnimation}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-blue-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-4" variants={fadeIn}>
            Ready to Experience Cabify?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={fadeIn}>
            Join thousands of satisfied riders.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg inline-block">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <Footer/>

      <BackToTopButton />
    </>
  );
};

export default About;
