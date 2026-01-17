
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, Briefcase, Download, Code, Zap } from "lucide-react"; // Added Code and Zap for experience

import { useState, useEffect } from "react";
import './index.css';
import profilePhoto from './Swathi Goswami.png'; 
import resume from "./Resume(final).pdf";
import chatbot from "./chatbot.png";
import cv from "./computer vision.png";
import NeuronBackground from "./NeuronBackground";
import IMMULINK from "./IMMULINK.png";
import churn from "./churn.png";
import LeetMentor from "./LeetMentor.png";

import * as SiIcons from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGem } from "react-icons/fa";      // Gemini placeholder
import { MdSmartToy } from "react-icons/md";// GenAI
import { AiOutlineDatabase } from "react-icons/ai"; // ChromaDB
import * as TbIcons from "react-icons/tb";    // Prompt Engineering
import { RiFileEditFill } from "react-icons/ri"; // Fine-tuning LLMs
import { BiCodeBlock } from "react-icons/bi"; // RAG

// Store the icon **as a component**, not JSX, for safety
const techStack = [
  { name: "Python", icon: SiIcons.SiPython },
  { name: "Java", icon: FaJava },
  { name: "FastAPI", icon: SiIcons.SiFastapi },
  { name: "Flask", icon: SiIcons.SiFlask },
  { name: "React", icon: SiIcons.SiReact },
  { name: "RAG", icon: BiCodeBlock },
  { name: "GenAI", icon: MdSmartToy },
  { name: "TensorFlow", icon: SiIcons.SiTensorflow },
  { name: "Solidity", icon: SiIcons.SiSolidity },
  { name: "Prompt Engineering", icon: TbIcons.TbMessageCircle },
  { name: "Fine-tuning LLMs", icon: RiFileEditFill },
  { name: "ChromaDB", icon: AiOutlineDatabase },
  { name: "Ollama", icon: SiIcons.SiOllama },
  { name: "Docker", icon: SiIcons.SiDocker },
  { name: "Gemini", icon: FaGem },
];
const PROFILE_PHOTO_URL = profilePhoto; 
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SCROLL_MARGIN_TOP_CLASS = "scroll-mt-20";
/* ---------- SMALL REUSABLES ---------- */
const HoverCard = ({ children, highlight }) => (
  <div
    // Updated highlight colors to purple
    className={`relative bg-white/10 rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${highlight ? "ring-1 ring-purple-400/40 shadow-purple-500/20" : "hover:shadow-purple-500/10"}`}
  >
    {children}
  </div>
);

// The ImageSlot component is kept as a structure for other elements but will be replaced with <img> below.
const TechBadge = ({ label, note }) => (
  <span title={note} className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/10 cursor-help">{label}</span>
);

const ImageSlot = ({ label }) => (
  <div className="h-40 w-full rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-sm opacity-60">
    {label}
  </div>
);

export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the section is visible, set it as the active one
          // We check intersection ratio to ensure it's sufficiently visible before activating
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Root margin adjusts when a section is considered "active"
        // Adjusting bottom margin to favor the next section slightly earlier
        rootMargin: "-100px 0px -60% 0px", 
        threshold: 0.1,
      }
    );

    SECTIONS.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    // Applied a professional, system-font stack for better readability and a modern, clean look.
    <div className={`${dark ? "bg-[#0b0b1a] text-slate-100" : "bg-[#f7f7fb] text-slate-900"} min-h-screen transition-colors font-['Inter','system-ui','sans-serif']`}>

      {/* THEME TOGGLE */}
      <button 
        onClick={() => setDark(!dark)} 
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-colors duration-300 shadow-lg 
          ${dark 
            // Theme toggle button color changed to purple
            ? "bg-purple-600 hover:bg-purple-500 text-white" 
            : "bg-white hover:bg-gray-100 text-slate-900 border border-gray-200"}`}
        aria-label="Toggle dark/light theme"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <nav 
        className={`sticky top-0 z-40 w-full backdrop-blur-md transition-shadow duration-300 ${
          dark ? "bg-[#0b0b1a]/90 shadow-2xl shadow-purple-900/40" : "bg-[#f7f7fb]/90 shadow-xl shadow-slate-200/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-wrap justify-center gap-6">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              // Custom onClick for smooth scrolling
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-sm font-medium transition-all duration-200 uppercase tracking-wider hover:opacity-100 
                ${activeSection === section.id 
                  ? "opacity-100 border-b-2 border-purple-400 text-purple-400" 
                  : "opacity-60 hover:text-purple-300"
                }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="relative z-[1] min-h-screen flex items-center justify-center overflow-hidden">
        {/* FULL-SCREEN HERO BACKGROUND (Hex codes are retained as they match deep purple/lavender) */}
          {/* NEURON BACKGROUND */}
  <NeuronBackground dark={dark} />

  {/* SOFT OVERLAY (for readability) */}
        <div
          className={`absolute inset-0 z-[2] ${
            dark
              ? "bg-[#0b0b1a]/70"
              : "bg-white/65"
          }`}
        />


        {/* HERO CONTENT */}
        <div className="relative z-[3] text-center px-6 py-20">
          {/* Avatar ring color changed to purple */}
          <div className="mx-auto w-52 h-52 rounded-full border-4 border-white/30 flex items-center justify-center mb-10 overflow-hidden">
            <img 
              src={PROFILE_PHOTO_URL} 
              alt="Swathi Goswami Profile" 
              // IMPORTANT: object-cover ensures the image fills the container and is cropped to fit the circle.
              className="w-full h-full object-cover rounded-full"
              // Fallback if image fails to load (using a different placeholder in case the primary one fails)
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/192x192/4f46e5/ffffff?text=SG"; }}
            />
          </div>

          <h1 className={`text-6xl font-extrabold tracking-tight ${dark ? "text-white" : "text-[#0f172a]"}`}>Swathi Goswami</h1>
          <p className={`mt-4 text-xl md:text-2xl font-light ${dark ? "text-white/80" : "text-slate-700"}`}>
            Aspiring Software Engineer · AI · Blockchain
          </p>

          {/* Social Links hover color changed to purple */}
          <div className={`flex justify-center items-center gap-6 mt-8 ${dark ? "text-white" : "text-slate-800"}`}>
            <a href="https://github.com/swathi-goswami-04" target="_blank" className="hover:text-purple-400 transition" aria-label="GitHub"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/swathi-goswami-sg/" target="_blank" className="hover:text-purple-400 transition" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://leetcode.com/u/swathi_goswami_20/" target="_blank" className="text-sm px-4 py-1 border border-white/30 rounded-full hover:bg-white/10 transition">LeetCode</a>
            <a href="https://www.hackerrank.com/profile/swathigoswami04" target="_blank" className="text-sm px-4 py-1 border border-white/30 rounded-full hover:bg-white/10 transition">HackerRank</a>
            <a href="mailto:swathigoswami04@gmail.com" className="hover:text-purple-400 transition-colors"><Mail size={24}/></a>
          </div>

          {/* Resume CTA button color changed to purple */}
          <div className="mt-12">
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-purple-500 text-white font-semibold shadow-xl shadow-purple-500/30 hover:bg-purple-600 transition duration-300 hover:scale-[1.02]"
            >
              <Download size={18} /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-20 ${SCROLL_MARGIN_TOP_CLASS}">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-6 ${dark ? "text-purple-400" : "text-purple-600"}`}>About Me</h2>
        <p className="opacity-90 text-lg leading-relaxed">
          {/* UPDATED, MORE IMPRESSIVE DESCRIPTION */}
        I'm a final-year Computer Science engineering student who enjoys understanding how complex systems work and building things that make sense in the real world. My interests lie in AI, machine learning, and blockchain, where reliability, clarity, and impact matter more than just getting things to run.

I've worked on end-to-end projects across ML, NLP, and computer vision, including Immulink, an IEEE-published blockchain and IoT-based vaccine traceability platform. I have a strong foundation in DSA, Java, and Python, and I value clean thinking, steady learning, and solving problems the right way.
        </p>
      </section>
      
      {/* STATS */}
      <section className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Stat numbers color changed to purple */}
          <HoverCard><h3 className="text-4xl font-extrabold text-purple-400">200+</h3><p className="opacity-70 mt-2">LeetCode Problems</p></HoverCard>
          <HoverCard><h3 className="text-4xl font-extrabold text-purple-400">2</h3><p className="opacity-70 mt-2">Industry Internships</p></HoverCard>
          <HoverCard><h3 className="text-4xl font-extrabold text-purple-400">1</h3><p className="opacity-70 mt-2">IEEE Publication</p></HoverCard>
          <HoverCard><h3 className="text-4xl font-extrabold text-purple-400">10+</h3><p className="opacity-70 mt-2">Projects Built</p></HoverCard>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-5xl mx-auto px-8 py-20 ${SCROLL_MARGIN_TOP_CLASS}">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-8 ${dark ? "text-purple-400" : "text-purple-600"}`}>Education</h2>
        <HoverCard>
          <h3 className="text-xl font-semibold">B.E. Computer Science & Engineering</h3>
          <p className="opacity-75 mt-2">Sri Sai Ram Institute of Technology · 2022 – 2026</p>
          <p className="mt-3 text-sm">CGPA: <strong>8.55</strong> (Till 6th Semester)</p>
        </HoverCard>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-24 ${SCROLL_MARGIN_TOP_CLASS}">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-14 ${dark ? "text-purple-400" : "text-purple-600"}`}>Featured Projects</h2>

        {/* IMMULINK HIGHLIGHT */}
        <HoverCard highlight>
          {/* Badge color changed to purple */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs border border-purple-400">Featured · IEEE</div>
          
          {/* STEP 2: REPLACE PROJECT IMAGE PLACEHOLDER WITH PROJECT VISUALS */}
          <img
            src = {IMMULINK} 
            alt="Immulink Blockchain Project Screenshot"
            className="h-40 w-full rounded-2xl object-cover border border-white/10"
          />

          <h3 className="text-2xl font-semibold mt-6">Immulink — Blockchain Vaccine Supply Chain</h3>
          <p className="opacity-80 mt-3">
            IEEE-published blockchain & IoT based system improving vaccine traceability and transparency by 40%.
          </p>
          <div className="flex gap-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">40% transparency ↑</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs">Production-ready</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Solidity","Ethereum","React","IoT","Blockchain"].map(t => <TechBadge key={t} label={t} note="Used in Immulink" />)}
          </div>
          <div className="flex gap-4 mt-6">
            {/* Link color changed to purple */}
            <a href="https://ieeexplore.ieee.org/document/10780200" target="_blank" className="inline-flex items-center gap-2 text-sm  hover:text-white transition">IEEE Paper <ExternalLink size={14} /></a>
            <a href="https://github.com/swathi-goswami-04/IMMULINK03" target="_blank" className="inline-flex items-center gap-2 text-sm hover:text-white transition">GitHub <ExternalLink size={14} /></a>
            <a href="https://immulink-03.vercel.app/" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition"> Deploy <ExternalLink size={14} /></a>
          </div>
        </HoverCard>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          <HoverCard>
            {/* STEP 2: REPLACE PROJECT IMAGE PLACEHOLDER WITH PROJECT VISUALS */}
            <img
              src={chatbot} 
              alt="SmartChatbot UI Screenshot"
              className="h-40 w-full rounded-2xl object-cover border border-white/10"
            />
            <h3 className="text-xl font-semibold mt-4">SmartChatbot_02 (RAG-based)</h3>
            <p className="opacity-80 mt-2">Custom DSA tutor using FastAPI, ChromaDB, and local LLMs.</p>
            <div className="flex flex-wrap gap-2 mt-3">{["Python","FastAPI","ChromaDB","LLM","Docker"].map(t => <TechBadge key={t} label={t} note="Used in RAG chatbot" />)}</div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/swathi-goswami-04/smartchatbot_02" target="_blank" className="inline-flex items-center gap-2 text-sm hover:text-white transition">GitHub <ExternalLink size={14} /></a>
              {/* Added Deploy Link - Placeholder used as URL not provided in resume text */}
              <a href="https://huggingface.co/spaces/Swathi04/dsa-rag-tutor" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition">Deploy <ExternalLink size={14} /></a>
            </div>
          </HoverCard>

          <HoverCard>
            <img
              src={LeetMentor}
              alt="LeetMentor AI-powered DSA Mentor"
              className="h-40 w-full rounded-2xl object-cover border border-white/10"
            />

            <h3 className="text-xl font-semibold mt-4">LeetMentor — AI DSA Mentor</h3>

            <p className="opacity-80 mt-2">
              An AI-powered mentor that helps users understand LeetCode problems through guided explanations,
              hints, and structured problem-solving strategies.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["Python","LLM","DSA","Prompt Engineering","AI Mentor"].map(t => (
                <TechBadge key={t} label={t} note="Used in LeetMentor" />
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/swathi-goswami-04/LeetMentor"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition"
              >
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </HoverCard>


          <HoverCard>
            {/* STEP 2: REPLACE PROJECT IMAGE PLACEHOLDER WITH PROJECT VISUALS */}
            <img
              src={churn} 
              alt="Churn Prediction App Screenshot"
              className="h-40 w-full rounded-2xl object-cover border border-white/10"
            />
            <h3 className="text-xl font-semibold mt-4">Churn Prediction System</h3>
            <p className="opacity-80 mt-2">End-to-end ML pipeline with FastAPI & Flask UI.</p>
            <div className="flex flex-wrap gap-2 mt-3">{["XGBoost","FastAPI","Flask","Docker"].map(t => <TechBadge key={t} label={t} note="End-to-end ML app" />)}</div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/swathi-goswami-04/churn_prediction" target="_blank" className="inline-flex items-center gap-2 text-sm hover:text-white transition">GitHub <ExternalLink size={14} /></a>
              {/* Added Deploy Link - Placeholder used as URL not provided in resume text */}
            </div>
          </HoverCard>
          
          <HoverCard>
            {/* STEP 2: REPLACE PROJECT IMAGE PLACEHOLDER WITH PROJECT VISUALS */}
            <img
              src={cv} 
              alt="Computer Vision Pipeline Screenshot"
              className="h-40 w-full rounded-2xl object-cover border border-white/10"
            />
            <h3 className="text-xl font-semibold mt-4">Computer Vision - Image Processing</h3>
            <p className="opacity-80 mt-2">Developed an ML pipeline for classical CV tasks using OpenCV and scikit-learn.</p>
            <div className="flex flex-wrap gap-2 mt-3">{["Python","OpenCV","NumPy","scikit-learn"].map(t => <TechBadge key={t} label={t} note="Computer Vision" />)}</div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/swathi-goswami-04/computer_vision" target="_blank" className="inline-flex items-center gap-2 text-sm hover:text-white transition">GitHub <ExternalLink size={14} /></a>
              {/* Added Deploy Link - Placeholder used as URL not provided in resume text */}
              <a href="https://huggingface.co/spaces/Swathi04/Casting-Defect-QC-MobileNetV2" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition">Deploy <ExternalLink size={14} /></a>
            </div>
          </HoverCard>
        </div>
      </section>

      {/* TECH STACK WALL */}
      <section className="max-w-6xl mx-auto px-8 py-28">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-14 ${dark ? "text-purple-400" : "text-purple-600"}`}>Tech Stack</h2>
        <p className="opacity-70 mb-10 max-w-3xl">Tools and technologies I actively use across software engineering, machine learning, and system design.</p>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {techStack.map((t) => {
    const Icon = t.icon; // Grab the component
    return (
      <div
        key={t.name}
        className="group bg-white/10 rounded-2xl p-4 border border-white/10 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
      >
        <div className="w-12 h-12 rounded-xl bg-white/10 border border-dashed border-white/20 flex items-center justify-center text-xs opacity-60 group-hover:opacity-90">
          <Icon size={24} /> {/* ✅ Render as JSX */}
        </div>
        <span className="text-sm font-medium opacity-90 group-hover:opacity-100">{t.name}</span>
      </div>
    );
  })}
</div>

      </section>

      {/* ACHIEVEMENTS & STATS */}
      <section id="achievements" className="max-w-6xl mx-auto px-8 py-28 ${SCROLL_MARGIN_TOP_CLASS}">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-14 ${dark ? "text-purple-400" : "text-purple-600"}`}>Achievements & Highlights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">IEEE</h3>
            <p className="opacity-70 mt-3">Research paper published on IEEE Xplore (Immulink, 2024)</p>
          </HoverCard>
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">Gold</h3>
            <p className="opacity-70 mt-3">HackerRank Gold Badge in Java</p>
          </HoverCard>
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">200+</h3>
            <p className="opacity-70 mt-3">Problems solved on LeetCode</p>
          </HoverCard>
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">250+</h3>
            <p className="opacity-70 mt-3">Students mentored via Code Club C & Python sessions</p>
          </HoverCard>
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">10+</h3>
            <p className="opacity-70 mt-3">End-to-end projects across ML, CV & Web</p>
          </HoverCard>
          <HoverCard>
            {/* Stat numbers color changed to purple */}
            <h3 className="text-4xl font-extrabold text-purple-400">Certified</h3>
            <p className="opacity-70 mt-3">NPTEL, edX, CISCO & GUVI coursework completed</p>
          </HoverCard>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-8 py-24 text-center ${SCROLL_MARGIN_TOP_CLASS}">
        {/* Heading color changed to purple */}
        <h2 className={`text-4xl font-bold mb-6 ${dark ? "text-purple-400" : "text-purple-600"}`}>Get In Touch</h2>
        <p className="opacity-75 mb-8 text-lg">Open to internships, research collaborations, and full-time roles.</p>
        <div className="flex justify-center flex-wrap gap-6">
          {/* Email button color changed to purple */}
          <a href="mailto:swathigoswami04@gmail.com" className="px-8 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition">
            <Mail size={18} className="inline mr-2" /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/swathi-goswami-sg/" target="_blank" className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            <Linkedin size={18} className="inline mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/swathi-goswami-04" target="_blank" className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            <Github size={18} className="inline mr-2" /> GitHub
          </a>
        </div>
        <p className="mt-8 text-sm opacity-60">📍 Chennai, India · 📞 +91 8610346885</p>
      </section>

      <footer className="text-center py-10 opacity-50 text-sm border-t border-white/10 mt-10">Designed with intent · Built to stand out</footer>
    </div>
  );
}
