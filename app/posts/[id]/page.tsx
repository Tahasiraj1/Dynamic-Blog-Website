import { notFound } from 'next/navigation'
import Comments from '@/components/Comments'

// Mock data for blog posts
const posts = [
    {
      id: 1,
      name: "Introduction to Programming: Where to Start?",
      description:
        "Programming is the process of creating instructions for computers to execute. Beginners can start by choosing a beginner-friendly language like Python or JavaScript. Focus on understanding core concepts like variables, loops, and functions. Hands-on practice and small projects will help solidify your learning.",
    },
    {
      id: 2,
      name: "Understanding JavaScript: The Language of the Web",
      description:
        "JavaScript is a versatile language used primarily for creating interactive web pages. It powers everything from simple button clicks to complex single-page applications. Mastering JavaScript includes understanding DOM manipulation, event handling, and modern frameworks like React or Vue.js.",
    },
    {
      id: 3,
      name: "Why Learn TypeScript?",
      description:
        "TypeScript is a superset of JavaScript that adds static typing, making your code more predictable and easier to debug. It's widely used in large-scale applications due to its ability to catch errors early in development. Start with basic TypeScript concepts and gradually explore advanced features like generics and decorators.",
    },
    {
      id: 4,
      name: "The Power of Python: Beyond Data Science",
      description:
        "Python is renowned for its simplicity and versatility. While it's popular in data science and machine learning, Python also excels in web development, automation, and scripting. Explore frameworks like Django or Flask to build web apps or use libraries like Selenium for automation tasks.",
    },
    {
      id: 5,
      name: "The Fundamentals of Data Structures and Algorithms",
      description:
        "Data structures and algorithms form the backbone of programming. Understanding structures like arrays, linked lists, and trees, along with algorithms like sorting and searching, enhances your problem-solving skills. Practice with coding challenges on platforms like LeetCode or HackerRank.",
    },
    {
      id: 6,
      name: "Diving into Functional Programming",
      description:
        "Functional programming is a paradigm focused on immutability and pure functions. Languages like Haskell, Scala, or even JavaScript (with libraries like Lodash) can help you explore this approach. Learn concepts like higher-order functions, closures, and currying to write cleaner and more efficient code.",
    },
    {
      id: 7,
      name: "How to Stay Updated with the Tech Industry?",
      description:
        "The tech industry evolves rapidly, making it crucial to stay updated. Follow programming blogs, subscribe to newsletters, and participate in developer communities. Engage in open-source projects and experiment with emerging tools and frameworks to keep your skills sharp.",
    },
  ];
  

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
      <p className="mb-4">{post.description}</p>
      <Comments />
    </div>
  )
}