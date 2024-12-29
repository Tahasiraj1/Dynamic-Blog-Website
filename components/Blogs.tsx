

"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/BlogCard"

const posts = [
    {
      id: 1,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "Introduction to Programming: Where to Start?",
      description:
        "Programming is the process of creating instructions for computers to execute. Beginners can start by choosing a beginner-friendly language like Python or JavaScript. Focus on understanding core concepts like variables, loops, and functions. Hands-on practice and small projects will help solidify your learning.",
    },
    {
      id: 2,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "Understanding JavaScript: The Language of the Web",
      description:
        "JavaScript is a versatile language used primarily for creating interactive web pages. It powers everything from simple button clicks to complex single-page applications. Mastering JavaScript includes understanding DOM manipulation, event handling, and modern frameworks like React or Vue.js.",
    },
    {
      id: 3,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "Why Learn TypeScript?",
      description:
        "TypeScript is a superset of JavaScript that adds static typing, making your code more predictable and easier to debug. It's widely used in large-scale applications due to its ability to catch errors early in development. Start with basic TypeScript concepts and gradually explore advanced features like generics and decorators.",
    },
    {
      id: 4,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "The Power of Python: Beyond Data Science",
      description:
        "Python is renowned for its simplicity and versatility. While it's popular in data science and machine learning, Python also excels in web development, automation, and scripting. Explore frameworks like Django or Flask to build web apps or use libraries like Selenium for automation tasks.",
    },
    {
      id: 5,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "The Fundamentals of Data Structures and Algorithms",
      description:
        "Data structures and algorithms form the backbone of programming. Understanding structures like arrays, linked lists, and trees, along with algorithms like sorting and searching, enhances your problem-solving skills. Practice with coding challenges on platforms like LeetCode or HackerRank.",
    },
    {
      id: 6,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "Diving into Functional Programming",
      description:
        "Functional programming is a paradigm focused on immutability and pure functions. Languages like Haskell, Scala, or even JavaScript (with libraries like Lodash) can help you explore this approach. Learn concepts like higher-order functions, closures, and currying to write cleaner and more efficient code.",
    },
    {
      id: 7,
      specialties: ["Programming", "Beginner"],
      image: "/images/developer-8764523.jpg",
      name: "How to Stay Updated with the Tech Industry?",
      description:
        "The tech industry evolves rapidly, making it crucial to stay updated. Follow programming blogs, subscribe to newsletters, and participate in developer communities. Engage in open-source projects and experiment with emerging tools and frameworks to keep your skills sharp.",
    },
  ];

export default function Blogs() {
  return (
    <section>
      <div className="relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4"
        >
          {posts.map((post, index) => (
            <motion.div key={index}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}