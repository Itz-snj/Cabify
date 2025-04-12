import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import missionImg from '../assets/Mission.webp';
import storyImg from '../assets/OurStory.jpg';
import hiwImg from '../assets/HIW.jpg';
import expImg from '../assets/Experience.jpg';
import teamImg from '../assets/Team.jpg';
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Cabify";
  }, []);

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gray-900 text-white mt-14 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="flex justify-end items-start flex-col h-[91.5vh] py-10 px-4 bg1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1 
          className="sm:text-8xl text-5xl font-extrabold tracking-wide z-20"
          variants={fadeIn}
        >
          Cabify
        </motion.h1>
        <motion.h3 
          className="sm:text-4xl text-2xl mt-6 font-extrabold tracking-tight z-20 sm:w-[60%] w-[80%]"
          variants={fadeIn}
        >
          Intelligent mobility solutions for a world in motion.
        </motion.h3>
        <motion.div 
          className="flex justify-center items-center gap-4 mt-4"
          variants={staggerContainer}
        >
          <motion.button 
            className="bg-white hover:bg-[#e1e1e1] z-20 text-purple-600 py-3 px-6 rounded-xl text-sm sm:text-base"
            variants={itemAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Ride
          </motion.button>
          <motion.button 
            className="bg-white hover:bg-[#e1e1e1] z-20 text-purple-600 py-3 px-6 rounded-xl text-sm sm:text-base"
            variants={itemAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Driver
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mission and Values Section */}
      <div className="min-h-screen w-full overflow-x-hidden my-28 pb-10 mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Driven by Purpose, Guided by Values
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mt-4 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          At Cabify, we aim to transform urban mobility by providing seamless, reliable, and safe transportation.
        </motion.p>

        <div className="flex mt-16 h-fit gap-6 md:flex-row flex-col">
          <motion.div 
            className="image md:w-[50%] w-[95%] flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="dummy h-fit w-[80%] bg-purple-700">
              <img src={missionImg} alt="Our mission" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col text-left md:ml-8 ml-2 content md:w-[50%] w-[98%] h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <p className="w-[95%]">At CABIFY, our mission is to create a transportation ecosystem that works for everyone—riders, drivers, and cities alike. We&apos;re committed to making urban mobility more efficient, equitable, and sustainable.</p>
            <br />
            <p className="w-[95%]">We believe transportation is a fundamental need that should be accessible, affordable, and safe for all. By leveraging technology to connect riders directly with drivers, we&apos;re removing barriers and creating opportunities while reducing the environmental impact of urban movement.</p>
          </motion.div>
        </div>

        <div className="flex flex-col mt-16">
          <motion.h3 
            className="w-full text-left text-2xl mb-12 pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Our core values shape everything we do:
          </motion.h3>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 px-6 md:mx-auto mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Driver Dignity", desc: "Without drivers, there is no CABIFY. Our platform ensures drivers receive fair compensation, respect, and growth opportunities.", icon: "🛡️" },
              { title: "Rider-Centered Design", desc: "Every feature and policy is designed with riders' needs at the forefront.", icon: "🤝" },
              { title: "Sustainable Innovation", desc: "We innovate not just for convenience, but for a more sustainable world.", icon: "🌱" },
              { title: "Inclusive Access", desc: "Everyone deserves reliable transportation, regardless of neighborhood, physical ability, or economic status.", icon: "⏳" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 md:w-[290px] w-[98%] md:h-[280px] h-fit rounded-xl shadow-lg text-center bg-gray-700 bg-opacity-70 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                variants={itemAnimation}
              >
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-gray-300 mt-2">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Story and How Cabify works Section */}
      <div className="min-h-screen bg-gray-800 py-16 md:px-6 px-1 my-28">
        <motion.h2 
          className="text-4xl font-bold w-full text-left mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          From Vision to Transformation: The CABIFY Journey
        </motion.h2>
        <div className="flex mt-16 md:flex-row flex-col-reverse gap-6 justify-center items-center">
          <motion.div 
            className="flex flex-col justify-center items-center text-left content md:w-[50%] w-[95%] md:px-8 px-2 h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p>CABIFY began when three transportation engineers—Maria Chen, David Rodriguez, and Amir Patel—observed a gap in the market in 2018. Starting with just 50 drivers in two cities, we built a platform that balances rider reliability with driver dignity. Today, we operate in 75+ cities across 12 countries.</p>
            <br />
            <p>We believe transportation is a fundamental need that should be accessible, affordable, and safe for all. By leveraging technology to connect riders directly with drivers, we&apos;re removing barriers and creating opportunities while reducing the environmental impact of urban movement.</p>
            <br />
            <br />
          </motion.div>

          <motion.div 
            className="image md:w-[50%] w-[95%] flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="dummy h-[95%] w-[90%] bg-purple-700">
              <img src={storyImg} alt="Our story" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="flex mt-10 md:flex-row flex-col gap-6 justify-center items-center">
          <motion.div 
            className="image md:w-[50%] w-[95%] flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="dummy h-[95%] w-[80%] bg-purple-700">
              <img src={hiwImg} alt="How it works" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col text-left content md:w-[50%] w-[95%] md:px-8 px-2 h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h3 className="text-2xl"><b>How It Works:</b></h3>
            <p>For riders, the process is simple: request a ride, get matched instantly, track your driver in real-time, enjoy your personalized journey, and pay seamlessly when you arrive.</p>
            <br />
            <p>For drivers, we offer straightforward onboarding, location-based ride requests, smart navigation tools, industry-leading 80% earnings, and continuous growth opportunities.</p>
            <br />
            <p>From our founding in 2018 to reaching 10 million rides in 2022 and implementing AI-optimized routes in 2024, we&apos;ve remained true to our core principle: technology should serve people, not the other way around.</p>
          </motion.div>
        </div>
      </div>

      {/* The Cabify Experience Section */}
      <div className="min-h-screen mx-auto my-28 md:px-6 px-1">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Two Sides, One Seamless Experience
        </motion.h2>

        <motion.div 
          className="image w-[100%] md:h-[400px] h-[250px] mb-12 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <div className="dummy h-[95%] w-[80%] relative bg-purple-700">
            <img src={expImg} alt="Cabify experience" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="flex flex-wrap md:flex-row flex-col md:gap-0 gap-6 justify-center items-start">
          <motion.div 
            className="rider md:w-1/2 w-[95%] text-left md:px-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3 className="text-xl">For Riders:</h3>
            <p>Your time matters. Your safety is non-negotiable. Your budget deserves respect. CABIFY delivers on all fronts with a rider experience designed around what you truly value:</p>
            <ul className="flex flex-col mt-8 gap-3">
              <li>• <b>Predictable Availability:</b> Never more than 3 minutes from a pickup in urban cores.</li>
              <li>• <b>Transparent Pricing:</b> See exactly what you&apos;ll pay before confirming your ride.</li>
              <li>• <b>Journey Protection:</b> Every ride includes $1M insurance coverage and real-time trip sharing.</li>
              <li>• <b>Personalized Experience:</b> From temperature settings to music preferences, your ride adapts to you.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="driver md:w-1/2 w-[95%] md:px-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h3 className="text-xl">For Drivers:</h3>
            <p>Driving for CABIFY means joining a community that invests in your success:</p>
            <ul className="flex flex-col mt-8 gap-3">
              <li>• <b>Earnings You Can Count On:</b> Keep 80% of every fare—the highest driver share in the industry.</li>
              <li>• <b>Flexible Schedules That Work:</b> Drive when it works for you.</li>
              <li>• <b>Growth Opportunities:</b> Access free training and vehicle maintenance partnerships.</li>
              <li>• <b>Voice That Matters:</b> Our Driver Advisory Council directly influences platform decisions.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Our Team and Impact Section */}
      <div className="min-h-screen h-fit py-16 md:px-6 px-1 bg-gray-700 mt-28">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          The People and Impact Behind CABIFY
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mt-4 leading-relaxed md:w-1/2 w-[90%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Our team combines deep expertise in transportation, technology, and urban planning with a shared passion for transforming how people move through their world.
        </motion.p>

        <div className="flex flex-wrap md:flex-row flex-col md:gap-0 gap-6 justify-center items-center my-10">
          <motion.div 
            className="image md:w-[50%] w-[95%] h-fit mb-12 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="dummy h-full w-[80%] bg-purple-700">
              <img src={teamImg} alt="Our team" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            className="h-fit md:w-[50%] w-[95%] flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div>
              <h4 className="mb-2"><b>Leadership:</b></h4>
              <ol>
                <li>• <b>Maria Chen, CEO & Co-founder:</b> Former urban transportation planner</li>
                <li>• <b>David Rodriguez, CTO & Co-founder:</b> AI specialist focused on routing optimization</li>
                <li>• <b>Amir Patel, COO & Co-founder:</b> Global logistics expert</li>
                <li>• <b>Sophia Williams, Chief Safety Officer:</b> Pioneer in transit security</li>
                <li>• <b>James Park, Chief Experience Officer:</b> Award-winning UX designer</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2"><b>Our Culture:</b></h4>
              <p>CABIFY thrives on diversity—spanning 28 nationalities and 19 languages. We practice &apos;radical transparency,&apos; where every employee has access to company metrics. From an initial team of 12, we&apos;ve grown to over 850 employees globally while maintaining our startup spirit.</p>
            </div>

            <div>
              <h4 className="mb-2"><b>Global Impact:</b></h4>
              <p>Our network spans 4 continents, 12 countries, and 75+ cities. We&apos;ve completed 87.5 million rides safely with 210,000+ active drivers earning over $1.2 billion. Our presence has led to a 32% reduction in personal vehicle usage and 18% decrease in parking demand in high-usage areas.</p>
            </div>

            <div>
              <h4 className="mb-2"><b>In Their Words:</b></h4>
              <p className="mb-3">&apos;CABIFY transformed my work life. As a single parent, I can earn when my kids are at school and be there when they need me.&apos; <br /> — Elena M., Driver since 2019</p>
              <p>&apos;I deleted my car-shopping app after using CABIFY for three months. The math just made sense.&apos; <br /> — Marcus T., Rider since 2020</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default About;