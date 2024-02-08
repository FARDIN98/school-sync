import logo from "../../assets/images/logo.png";
import overview from "../../assets/images/overview.png";
import quiz from "../../assets/images/Quiz_Generate.png";
import learning from "../../assets/images/Learning_suggestion.png";
import chatbot from "../../assets/images/AI_chatbot.png";
import student from "../../assets/images/student.png";
import parents from "../../assets/images/parents.png";
import teacher from "../../assets/images/teacher.png";
import admin from "../../assets/images/admin.png";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <section className="bg-whitesmoke-200">
        <header className="max-w-[90rem] mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div>
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3 no-underline"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />{" "}
                <span className="text-red no-underline text-3xl">
                  S<span className="text-[#263238]">chool-Sync</span>
                </span>
              </a>
            </div>
            <Link to="/login">
            <button className="text-lg bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer">
              Login
            </button>
            </Link>
            
          </nav>
        </header>
      </section>
      <section className="bg-[#D4E7C5]" > 
      <div className="col-span-4 text-center text-7xl text-bold italic py-4">
          Overview
        </div>
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-center text-gray-600 text-bold italic text-left"
          >
            A holistic approach to enhance the learning experience by Cultivating Collaborative Pedagogy and Comprehensive Evaluation
            Framework
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={overview} alt="" />
          </motion.div>
        </div>
      </section>
      <motion.section
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 1, x: { duration: 1 } }}
        className="grid grid-cols-4 max-w-7xl mx-auto py-10 gap-10 text-center text-xl"
      >
        <div className="col-span-4 text-center text-7xl text-bold italic">
          Our Audience
        </div>
        <div className="shadow-xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Focus Learning Goal</div>
          <img src={student} alt="student" width={200} />
          <div className="text-center font-bold italic text-xl">Student</div>
        </div>
        <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Active Online Communication</div>
          <img src={parents} alt="student" width={200} />
          <div className="text-center font-bold italic text-xl">Parents</div>
        </div>
        <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Preparation for Global Society</div>
          <img src={teacher} alt="teacher" width={200} />
          <div className="text-center font-bold italic text-xl">Teacher</div>
        </div>
        <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Holistic Learing Inhancement Tools</div>
          <img src={admin} alt="admin" width={200} />
          <div className="text-center font-bold italic text-xl">Admin</div>
        </div>
      </motion.section>
      <section className="bg-slate-200">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-32 gap-y-10">
          <div className="col-span-2 text-center text-7xl text-bold italic">
            Automatic Quiz Generator
          </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={quiz} alt="" />
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-center text-gray-600 text-bold italic"
          >
            Utilize machine learning algorithms to generate personalized quiz questions based on individual learning patterns and knowledge gaps.
          </motion.div>
        </div>
      </section>
      <section className="bg-[#bae8e8]">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-32 gap-y-10">
          <div className="col-span-2 text-center text-7xl text-bold italic">
            Adaptive Learning Suggestion
          </div>

          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-center text-gray-600 text-bold italic"
          >
            Utilize real-time data insights to recommend customized learning paths, adjusting content difficulty and pacing to optimize individual progress and engagement.
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={learning} alt="" />
          </motion.div>
        </div>
      </section>
      <section className="bg-slate-200">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-32 gap-y-10">
          <div className="col-span-2 text-center text-7xl">AI Chatbot</div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={chatbot} alt="" />
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-center text-gray-600 text-bold italic"
          >
            AI chatbot interact with students question and provide instant answer to enhance students learning effeciency. 
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
