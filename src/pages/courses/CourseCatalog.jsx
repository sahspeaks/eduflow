// import React, { useState, useMemo } from "react";
// import CourseCard from "../../components/courses/CourseCard";
// import Filters from "../../components/courses/Filters";
// import Pagination from "../../components/courses/Pagination";

// const ITEMS_PER_PAGE = 9;

// const mockCourses = [
//   {
//     id: 1,
//     title: "Complete Web Development Bootcamp",
//     instructor: "Sarah Johnson",
//     description:
//       "Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js.",
//     price: 89.99,
//     rating: 4.9,
//     students: 2345,
//     duration: "40 hours",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
//     category: "Development",
//     level: "Beginner",
//   },
//   {
//     id: 2,
//     title: "Data Science and Machine Learning",
//     instructor: "Michael Chen",
//     description:
//       "Master data science, machine learning, and Python programming.",
//     price: 79.99,
//     rating: 4.8,
//     students: 1890,
//     duration: "35 hours",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
//     category: "Data Science",
//     level: "Intermediate",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing Mastery",
//     instructor: "Emma Wilson",
//     description:
//       "Learn digital marketing strategies, SEO, social media, and content marketing.",
//     price: 69.99,
//     rating: 4.7,
//     students: 2100,
//     duration: "28 hours",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
//     category: "Marketing",
//     level: "Advanced",
//   },
//   // Add more mock courses here...
// ];

// const categories = [
//   "Development",
//   "Data Science",
//   "Marketing",
//   "Business",
//   "Design",
// ];
// const levels = ["Beginner", "Intermediate", "Advanced"];

// export default function CourseCatalog() {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedLevel, setSelectedLevel] = useState("");
//   const [priceRange, setPriceRange] = useState([0, 200]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const maxPrice = Math.max(...mockCourses.map((course) => course.price));

//   const filteredCourses = useMemo(() => {
//     return mockCourses.filter((course) => {
//       const matchesSearch =
//         course.title.toLowerCase().includes(search.toLowerCase()) ||
//         course.description.toLowerCase().includes(search.toLowerCase());
//       const matchesCategory =
//         !selectedCategory || course.category === selectedCategory;
//       const matchesLevel = !selectedLevel || course.level === selectedLevel;
//       const matchesPrice =
//         course.price >= priceRange[0] && course.price <= priceRange[1];

//       return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
//     });
//   }, [search, selectedCategory, selectedLevel, priceRange]);

//   const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
//   const paginatedCourses = filteredCourses.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20 pb-12">
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Course Catalog
//           </h1>
//           <p className="text-xl text-gray-600">
//             Discover our wide range of courses and start learning today
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
//           <aside className="lg:col-span-1">
//             <div className="sticky top-24 bg-white p-4  rounded-lg shadow-md">
//               <Filters
//                 categories={categories}
//                 levels={levels}
//                 search={search}
//                 selectedCategory={selectedCategory}
//                 selectedLevel={selectedLevel}
//                 priceRange={priceRange}
//                 maxPrice={maxPrice}
//                 onSearchChange={setSearch}
//                 onCategoryChange={setSelectedCategory}
//                 onLevelChange={setSelectedLevel}
//                 onPriceRangeChange={setPriceRange}
//               />
//             </div>
//           </aside>

//           <main className="lg:col-span-3">
//             <div className="mb-6 flex justify-between items-center">
//               <p className="text-gray-600">
//                 Showing {paginatedCourses.length} of {filteredCourses.length}{" "}
//                 courses
//               </p>
//               <select
//                 className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 defaultValue="newest"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="popular">Most Popular</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//               </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {paginatedCourses.map((course) => (
//                 <CourseCard key={course.id} course={course} />
//               ))}
//             </div>

//             {totalPages > 1 && (
//               <div className="mt-12">
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={setCurrentPage}
//                 />
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";
import CourseCard from "../../components/courses/CourseCard";
import Filters from "../../components/courses/Filters";
import Pagination from "../../components/courses/Pagination";

const ITEMS_PER_PAGE = 9;

const mockCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    description:
      "Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js.",
    price: 89.99,
    rating: 4.9,
    students: 2345,
    duration: "40 hours",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    category: "Development",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    instructor: "Michael Chen",
    description:
      "Master data science, machine learning, and Python programming.",
    price: 79.99,
    rating: 4.8,
    students: 1890,
    duration: "35 hours",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    category: "Data Science",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Emma Wilson",
    description:
      "Learn digital marketing strategies, SEO, social media, and content marketing.",
    price: 69.99,
    rating: 4.7,
    students: 2100,
    duration: "28 hours",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Marketing",
    level: "Advanced",
  },
  // Add more mock courses here...
  {
    id: 4,
    title: "Digital Marketing Mastery",
    instructor: "Emma Wilson",
    description:
      "Learn digital marketing strategies, SEO, social media, and content marketing.",
    price: 69.99,
    rating: 4.7,
    students: 2100,
    duration: "28 hours",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Marketing",
    level: "Advanced",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    instructor: "Emma Wilson",
    description:
      "Learn digital marketing strategies, SEO, social media, and content marketing.",
    price: 69.99,
    rating: 4.7,
    students: 2100,
    duration: "28 hours",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Marketing",
    level: "Advanced",
  },
];

const categories = [
  "Development",
  "Data Science",
  "Marketing",
  "Business",
  "Design",
];
const levels = ["Beginner", "Intermediate", "Advanced"];

export default function CourseCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const maxPrice = Math.max(...mockCourses.map((course) => course.price));

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        !selectedCategory || course.category === selectedCategory;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      const matchesPrice =
        course.price >= priceRange[0] && course.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [search, selectedCategory, selectedLevel, priceRange]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Catalog
          </h1>
          <p className="text-xl text-gray-600">
            Discover our wide range of courses and start learning today
          </p>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {paginatedCourses.length} of {filteredCourses.length}{" "}
            courses
          </p>
          <div className="flex items-center space-x-4">
            <select
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              defaultValue="newest"
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {/* Sliding Sidebar Filter */}
      <div
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <Filters
            categories={categories}
            levels={levels}
            search={search}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            priceRange={priceRange}
            maxPrice={maxPrice}
            onSearchChange={setSearch}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
            onPriceRangeChange={setPriceRange}
          />
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
