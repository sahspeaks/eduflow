// // // import React from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import {
// // //   BookOpen,
// // //   Menu,
// // //   ShoppingBag,
// // //   UserCircle,
// // //   LogOut,
// // //   X,
// // // } from "lucide-react";
// // // import { useAuth } from "../../context/AuthContext";
// // // import { useCart } from "../../context/CartContext";

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = React.useState(false);
// // //   const { user, logout } = useAuth();
// // //   const { items } = useCart();
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate("/login");
// // //   };
// // //   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

// // //   return (
// // //     <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md left-0 right-0 z-50 shadow-lg">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center py-3">
// // //           <div className="flex items-center">
// // //             <Link to="/" className="flex items-center space-x-2">
// // //               <BookOpen className="h-8 w-8 text-indigo-600" />
// // //               <span className="text-2xl font-bold text-gray-900">EduFlow</span>
// // //             </Link>
// // //           </div>

// // //           <nav className="hidden md:flex items-center space-x-8">
// // //             <Link
// // //               to="/courses"
// // //               className="text-gray-600 hover:text-gray-900 transition-colors"
// // //             >
// // //               Courses
// // //             </Link>
// // //           </nav>

// // //           <div className="hidden md:flex items-center space-x-4">
// // //             {user ? (
// // //               <>
// // //                 <Link
// // //                   to="/cart"
// // //                   className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full"
// // //                 >
// // //                   <ShoppingBag className="h-7 w-7" />
// // //                   {totalItems > 0 && (
// // //                     <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold text-white bg-red-300 rounded-full">
// // //                       {totalItems}
// // //                     </span>
// // //                   )}
// // //                 </Link>
// // //                 {user.role === "admin" ? (
// // //                   <Link
// // //                     to="/admin"
// // //                     className="text-gray-600 hover:text-gray-900 p-2 rounded-full"
// // //                   >
// // //                     <UserCircle className="h-7 w-7" />
// // //                   </Link>
// // //                 ) : (
// // //                   <Link
// // //                     to="/profile"
// // //                     className="text-gray-600 hover:text-gray-900 p-2 rounded-full"
// // //                   >
// // //                     <UserCircle className="h-7 w-7" />
// // //                   </Link>
// // //                 )}
// // //                 <button
// // //                   onClick={handleLogout}
// // //                   className="text-indigo-500 hover:bg-indigo-500 hover:text-white p-2 rounded-full"
// // //                 >
// // //                   <LogOut className="h-6 w-6" />
// // //                 </button>
// // //               </>
// // //             ) : (
// // //               <Link
// // //                 to="/login"
// // //                 className="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md font-medium"
// // //               >
// // //                 Sign in
// // //               </Link>
// // //             )}
// // //           </div>
// // //           <div className="md:hidden">
// // //             <button
// // //               onClick={() => setIsOpen(!isOpen)}
// // //               className="text-white hover:bg-indigo-500 p-2 rounded-md"
// // //             >
// // //               {isOpen ? (
// // //                 <X className="h-6 w-6" />
// // //               ) : (
// // //                 <Menu className="h-6 w-6" />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // import React, { useState, useRef, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   BookOpen,
// //   LogIn,
// //   UserPlus,
// //   Menu,
// //   X,
// //   User,
// //   ShoppingCart,
// //   Grid,
// //   BookOpenText,
// //   BookOpenCheck,
// //   Library,
// //   ChevronDown,
// //   ChevronUp,
// // } from "lucide-react";
// // import { useAuth } from "../../context/AuthContext";
// // import { useCart } from "../../context/CartContext";

// // // Mock authentication state - this would typically come from an auth context

// // // Possible values: 'student', 'college', 'tutor', 'admin'

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
// //   const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const buttonRef = useRef(null);
// //   const navigate = useNavigate();

// //   const { user, logout } = useAuth();
// //   const { items } = useCart();
// //   //authentication check
// //   const isAuthenticated = true;
// //   const userRole = "student"; //user?.role student college tutor admin

// //   const totalItems = 4; //items.reduce((sum, item) => sum + item.quantity, 0);

// //   // Handle clicks outside the dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (
// //         dropdownRef.current &&
// //         !dropdownRef.current.contains(event.target) &&
// //         buttonRef.current &&
// //         !buttonRef.current.contains(event.target)
// //       ) {
// //         setIsProfileDropdownOpen(false);
// //       }
// //     };

// //     // Add event listener
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       // Cleanup the event listener
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   const handleLogout = () => {
// //     // Add logout logic here
// //     logout();

// //     navigate("/login");
// //   };

// //   // Render navigation links based on user role
// //   const renderDesktopNavLinks = () => {
// //     if (!isAuthenticated) {
// //       return (
// //         <div className="flex items-center space-x-4">
// //           <Link
// //             to="/courses"
// //             className="text-gray-600 hover:text-gray-900 transition-colors"
// //           >
// //             <Library className="h-5 w-5 inline-block mr-1" />
// //             Courses
// //           </Link>
// //           <Link
// //             to="/login"
// //             className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
// //           >
// //             <LogIn className="h-5 w-5" />
// //             <span>Login</span>
// //           </Link>
// //           <Link
// //             to="/register"
// //             className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
// //           >
// //             <UserPlus className="h-5 w-5" />
// //             <span>Sign Up</span>
// //           </Link>
// //         </div>
// //       );
// //     }

// //     // Desktop common links for all authenticated users
// //     const commonLinks = (
// //       <div className="relative">
// //         <button
// //           ref={buttonRef}
// //           className="flex items-center space-x-1"
// //           onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// //         >
// //           <User className="h-5 w-5" />
// //           <span>Profile</span>
// //         </button>
// //         {isProfileDropdownOpen && (
// //           <div
// //             ref={dropdownRef}
// //             className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl"
// //           >
// //             <Link
// //               to="/settings"
// //               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
// //               onClick={() => setIsProfileDropdownOpen(false)}
// //             >
// //               Settings
// //             </Link>
// //             <button
// //               onClick={() => {
// //                 handleLogout();
// //                 setIsProfileDropdownOpen(false);
// //               }}
// //               className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     );

// //     // Role-specific navigation links
// //     switch (userRole) {
// //       case "student":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900 transition-colors"
// //             >
// //               <Library className="h-5 w-5 inline-block mr-1" />
// //               Courses
// //             </Link>
// //             <Link
// //               to="/student/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <Grid className="h-5 w-5 inline-block mr-1" />
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/student/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <BookOpenCheck className="h-5 w-5 inline-block mr-1" />
// //               My Courses
// //             </Link>
// //             <Link to="/cart" className="text-gray-600 hover:text-gray-900">
// //               <ShoppingCart className="h-5 w-5" />
// //               {totalItems > 0 && (
// //                 <span className="relative top-3 right-4 -mt-1 -mr-1 px-2 py-1 text-xs font-bold text-white bg-red-300 rounded-full">
// //                   {totalItems}
// //                 </span>
// //               )}
// //             </Link>
// //             {commonLinks}
// //           </>
// //         );
// //       case "college":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900 transition-colors"
// //             >
// //               <Library className="h-5 w-5 inline-block mr-1" />
// //               Courses
// //             </Link>
// //             <Link
// //               to="/college/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <Grid className="h-5 w-5 inline-block mr-1" />
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/college/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <BookOpenCheck className="h-5 w-5 inline-block mr-1" />
// //               My Courses
// //             </Link>
// //             <Link to="/cart" className="text-gray-600 hover:text-gray-900">
// //               <ShoppingCart className="h-5 w-5" />
// //             </Link>
// //             {commonLinks}
// //           </>
// //         );

// //       case "tutor":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900 transition-colors"
// //             >
// //               Courses
// //             </Link>
// //             <Link
// //               to="/tutor/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <Grid className="h-5 w-5 inline-block mr-1" />
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/tutor/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <BookOpenText className="h-5 w-5 inline-block mr-1" />
// //               My Courses
// //             </Link>
// //             {commonLinks}
// //           </>
// //         );

// //       case "admin":
// //         return (
// //           <>
// //             <Link
// //               to="/admin/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <Grid className="h-5 w-5 inline-block mr-1" />
// //               Dashboard
// //             </Link>
// //             {commonLinks}
// //           </>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   // Render mobile navigation links based on user role
// //   const renderMobileNavLinks = () => {
// //     if (!isAuthenticated) {
// //       return (
// //         <>
// //           <Link
// //             to="/login"
// //             className="text-gray-600 hover:text-gray-900"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Login
// //           </Link>
// //           <Link
// //             to="/register"
// //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 inline-block"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Sign Up
// //           </Link>
// //         </>
// //       );
// //     }

// //     // Role-specific mobile navigation links
// //     switch (userRole) {
// //       case "student":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Courses
// //             </Link>
// //             <Link
// //               to="/student/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/student/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               My Courses
// //             </Link>
// //             <Link
// //               to="/cart"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Cart
// //             </Link>

// //             {/* Mobile Profile Dropdown */}
// //             <div>
// //               <button
// //                 className="flex w-full justify-between items-center text-gray-600 hover:text-gray-900"
// //                 onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
// //               >
// //                 <span>Profile</span>
// //                 {isMobileProfileOpen ? <ChevronUp /> : <ChevronDown />}
// //               </button>
// //               {isMobileProfileOpen && (
// //                 <div className="pl-4 mt-2 space-y-2">
// //                   <Link
// //                     to="/settings"
// //                     className="block text-gray-600 hover:text-gray-900"
// //                     onClick={() => {
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                   >
// //                     Settings
// //                   </Link>
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                     className="block w-full text-left text-gray-600 hover:text-gray-900"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </>
// //         );
// //       case "college":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900 transition-colors"
// //             >
// //               <Library className="h-5 w-5 inline-block mr-1" />
// //               Courses
// //             </Link>
// //             <Link
// //               to="/college/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <Grid className="h-5 w-5 inline-block mr-1" />
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/college/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //             >
// //               <BookOpenCheck className="h-5 w-5 inline-block mr-1" />
// //               My Courses
// //             </Link>
// //             <Link to="/cart" className="text-gray-600 hover:text-gray-900">
// //               <ShoppingCart className="h-5 w-5" />
// //             </Link>
// //             {/* Mobile Profile Dropdown */}
// //             <div>
// //               <button
// //                 className="flex w-full justify-between items-center text-gray-600 hover:text-gray-900"
// //                 onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
// //               >
// //                 <span>Profile</span>
// //                 {isMobileProfileOpen ? <ChevronUp /> : <ChevronDown />}
// //               </button>
// //               {isMobileProfileOpen && (
// //                 <div className="pl-4 mt-2 space-y-2">
// //                   <Link
// //                     to="/settings"
// //                     className="block text-gray-600 hover:text-gray-900"
// //                     onClick={() => {
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                   >
// //                     Settings
// //                   </Link>
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                     className="block w-full text-left text-gray-600 hover:text-gray-900"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </>
// //         );

// //       case "tutor":
// //         return (
// //           <>
// //             <Link
// //               to="/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Courses
// //             </Link>
// //             <Link
// //               to="/tutor/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/tutor/courses"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               My Courses
// //             </Link>

// //             {/* Mobile Profile Dropdown */}
// //             <div>
// //               <button
// //                 className="flex w-full justify-between items-center text-gray-600 hover:text-gray-900"
// //                 onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
// //               >
// //                 <span>Profile</span>
// //                 {isMobileProfileOpen ? <ChevronUp /> : <ChevronDown />}
// //               </button>
// //               {isMobileProfileOpen && (
// //                 <div className="pl-4 mt-2 space-y-2">
// //                   <Link
// //                     to="/settings"
// //                     className="block text-gray-600 hover:text-gray-900"
// //                     onClick={() => {
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                   >
// //                     Settings
// //                   </Link>
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                     className="block w-full text-left text-gray-600 hover:text-gray-900"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </>
// //         );

// //       case "admin":
// //         return (
// //           <>
// //             <Link
// //               to="/admin/dashboard"
// //               className="text-gray-600 hover:text-gray-900"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               Dashboard
// //             </Link>

// //             {/* Mobile Profile Dropdown */}
// //             <div>
// //               <button
// //                 className="flex w-full justify-between items-center text-gray-600 hover:text-gray-900"
// //                 onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
// //               >
// //                 <span>Profile</span>
// //                 {isMobileProfileOpen ? <ChevronUp /> : <ChevronDown />}
// //               </button>
// //               {isMobileProfileOpen && (
// //                 <div className="pl-4 mt-2 space-y-2">
// //                   <Link
// //                     to="/settings"
// //                     className="block text-gray-600 hover:text-gray-900"
// //                     onClick={() => {
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                   >
// //                     Settings
// //                   </Link>
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       setIsMenuOpen(false);
// //                       setIsMobileProfileOpen(false);
// //                     }}
// //                     className="block w-full text-left text-gray-600 hover:text-gray-900"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center py-4">
// //           <Link to="/" className="flex items-center space-x-2">
// //             <BookOpen className="h-8 w-8 text-indigo-600" />
// //             <span className="text-2xl font-bold text-gray-900">EduFlow</span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center space-x-8">
// //             {renderDesktopNavLinks()}
// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {isMenuOpen ? (
// //               <X className="h-6 w-6" />
// //             ) : (
// //               <Menu className="h-6 w-6" />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="md:hidden py-4">
// //             <nav className="flex flex-col space-y-4">
// //               {renderMobileNavLinks()}
// //             </nav>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   BookOpen,
//   LogIn,
//   UserPlus,
//   Menu,
//   X,
//   User,
//   ShoppingCart,
//   Grid,
//   BookOpenCheck,
//   Library,
//   Settings,
//   LogOut,
//   Home,
//   ChevronsLeft,
//   ChevronsRight,
// } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";

// export default function SidebarNavigation({ isSidebarOpen, setIsSidebarOpen }) {
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);
//   const navigate = useNavigate();

//   const { user, logout } = useAuth();
//   const { items } = useCart();

//   // Mock authentication state - this would typically come from an auth context
//   const isAuthenticated = true;
//   const userRole = "student"; // Possible values: 'student', 'college', 'tutor', 'admin'

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

//   // Close mobile sidebar when clicking outside or on a link
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         window.innerWidth < 768
//       ) {
//         setIsMobileSidebarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setIsMobileSidebarOpen(false);
//   };

//   const NavLink = ({ to, icon: Icon, children, onClick }) => (
//     <Link
//       to={to}
//       className={`
//         flex items-center space-x-3 px-4 py-2 rounded-lg
//         hover:bg-indigo-50 transition-all duration-300 ease-in-out
//         transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         group
//       `}
//       onClick={onClick}
//     >
//       <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600" />
//       <span
//         className={`
//         text-gray-700 group-hover:text-gray-900
//         ${isSidebarOpen ? "opacity-100" : "opacity-0"}
//         transition-opacity duration-300
//       `}
//       >
//         {children}
//       </span>
//     </Link>
//   );

//   const renderNavLinks = () => {
//     if (!isAuthenticated) {
//       return (
//         <>
//           <NavLink to="/login" icon={LogIn}>
//             Login
//           </NavLink>
//           <NavLink to="/register" icon={UserPlus}>
//             Sign Up
//           </NavLink>
//         </>
//       );
//     }

//     switch (userRole) {
//       case "student":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/student/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/student/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       // ... other role cases remain the same
//       case "tutor":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/tutor/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/tutor/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       case "college":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/college/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/college/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       case "admin":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/admin/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Toggle - Outside of any sidebar */}
//       <button
//         className="fixed top-4 left-4 z-50 md:hidden"
//         onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
//       >
//         {isMobileSidebarOpen ? "" : <Menu className="h-6 w-6" />}
//       </button>

//       {/* Sidebar for Mobile */}
//       <aside
//         ref={sidebarRef}
//         className={`
//             fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
//             md:hidden rounded-r-3xl
//             ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//       >
//         <div className="flex flex-col h-full">
//           {/* Mobile Sidebar Header */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <Link to="/" className="flex items-center space-x-2">
//               <BookOpen className="h-8 w-8 text-indigo-600" />
//               <span className="text-2xl font-bold text-gray-900">EduFlow</span>
//             </Link>
//             {/* Close Button on the Right */}
//             <button
//               onClick={() => setIsMobileSidebarOpen(false)}
//               className="ml-auto p-1 hover:bg-gray-100 rounded-full"
//             >
//               <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 py-4 overflow-y-auto">
//             <div className="space-y-1">{renderNavLinks()}</div>
//           </nav>

//           {/* Logout */}
//           {isAuthenticated && (
//             <div className="border-t p-4">
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg hover:bg-red-50 transition-colors group"
//               >
//                 <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />
//                 <span className="text-gray-700 group-hover:text-gray-900">
//                   Logout
//                 </span>
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>

//       {/* Desktop Sidebar */}
//       <aside
//         className={`
//           hidden md:flex flex-col fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out
//           ${isSidebarOpen ? "w-64" : "w-20"}
//         `}
//       >
//         <div className="flex flex-col h-full">
//           {/* Desktop Sidebar Header with Toggle */}
//           <div className="flex items-center justify-between p-4 border-b">
//             {isSidebarOpen ? (
//               <Link to="/" className="flex items-center space-x-2">
//                 <BookOpen className="h-8 w-8 text-indigo-600" />
//                 <span className="text-2xl font-bold text-gray-900">
//                   EduFlow
//                 </span>
//               </Link>
//             ) : (
//               <Link to="/" className="mx-auto">
//                 <BookOpen className="h-8 w-8 text-indigo-600" />
//               </Link>
//             )}

//             {/* Sidebar Toggle Button */}
//             <button
//               className="ml-auto p-1 hover:bg-gray-100 rounded-full"
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             >
//               {isSidebarOpen ? (
//                 <ChevronsLeft className="h-6 w-6" />
//               ) : (
//                 <ChevronsRight className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 py-4 overflow-y-auto">
//             <div className="space-y-1">
//               {React.Children.map(renderNavLinks(), (child) =>
//                 React.cloneElement(child, {
//                   children: isSidebarOpen ? (
//                     child.props.children
//                   ) : (
//                     <span className="sr-only">{child.props.children}</span>
//                   ),
//                 })
//               )}
//             </div>
//           </nav>

//           {/* Logout */}
//           {isAuthenticated && (
//             <div className="border-t p-4">
//               <button
//                 onClick={handleLogout}
//                 className={`
//                   flex items-center space-x-3 w-full px-4 py-2 rounded-lg
//                   hover:bg-red-50 transition-colors group
//                   ${isSidebarOpen ? "" : "justify-center"}
//                 `}
//               >
//                 <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />
//                 {isSidebarOpen && (
//                   <span className="text-gray-700 group-hover:text-gray-900">
//                     Logout
//                   </span>
//                 )}
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   BookOpen,
//   LogIn,
//   UserPlus,
//   Menu,
//   X,
//   User,
//   ShoppingCart,
//   Grid,
//   BookOpenCheck,
//   Library,
//   Settings,
//   LogOut,
//   Home,
//   ChevronsLeft,
//   ChevronsRight,
// } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";

// export default function SidebarNavigation({ isSidebarOpen, setIsSidebarOpen }) {
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);
//   const navigate = useNavigate();

//   const { user, logout } = useAuth();
//   const { items } = useCart();

//   // Mock authentication state - this would typically come from an auth context
//   const isAuthenticated = true;
//   const userRole = "student"; // Possible values: 'student', 'college', 'tutor', 'admin'

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

//   // Close mobile sidebar when clicking outside or on a link
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         window.innerWidth < 768
//       ) {
//         setIsMobileSidebarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setIsMobileSidebarOpen(false);
//   };

//   const NavLink = ({ to, icon: Icon, children, onClick }) => (
//     <Link
//       to={to}
//       className={`
//         flex items-center space-x-3 px-4 py-3 rounded-lg
//         hover:bg-indigo-50 transition-all duration-300 ease-in-out
//         transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         group
//       `}
//       onClick={onClick}
//     >
//       <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600" />
//       <span
//         className={`
//         text-gray-700 group-hover:text-gray-900
//         ${isSidebarOpen ? "opacity-100" : "opacity-0"}
//         transition-opacity duration-300
//       `}
//       >
//         {children}
//       </span>
//     </Link>
//   );

//   const renderNavLinks = () => {
//     if (!isAuthenticated) {
//       return (
//         <>
//           <NavLink to="/login" icon={LogIn}>
//             Login
//           </NavLink>
//           <NavLink to="/register" icon={UserPlus}>
//             Sign Up
//           </NavLink>
//         </>
//       );
//     }

//     switch (userRole) {
//       case "student":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/student/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/student/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       // ... other role cases remain the same
//       case "tutor":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/tutor/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/tutor/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       case "college":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/college/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/college/courses" icon={BookOpenCheck}>
//               My Courses
//             </NavLink>
//             <NavLink to="/cart" icon={ShoppingCart}>
//               Cart{" "}
//               {totalItems > 0 && (
//                 <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       case "admin":
//         return (
//           <>
//             <NavLink to="/" icon={Home}>
//               Home
//             </NavLink>
//             <NavLink to="/courses" icon={Library}>
//               Courses
//             </NavLink>
//             <NavLink to="/admin/dashboard" icon={Grid}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/settings" icon={Settings}>
//               Settings
//             </NavLink>
//             <NavLink to="/settings" icon={User}>
//               Profile
//             </NavLink>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Toggle - Outside of any sidebar */}
//       <button
//         className="fixed top-4 left-4 z-50 md:hidden"
//         onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
//       >
//         {isMobileSidebarOpen ? "" : <Menu className="h-6 w-6" />}
//       </button>
//       {/* Sidebar for Mobile */}
//       <aside
//         ref={sidebarRef}
//         className={`
//             fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
//             md:hidden rounded-r-3xl
//             ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//       >
//         <div className="flex flex-col h-full">
//           {/* Mobile Sidebar Header */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <Link to="/" className="flex items-center space-x-2">
//               <BookOpen className="h-8 w-8 text-indigo-600" />
//               <span className="text-2xl font-bold text-gray-900">EduFlow</span>
//             </Link>
//             {/* Close Button on the Right */}
//             <button
//               onClick={() => setIsMobileSidebarOpen(false)}
//               className="ml-auto p-1 hover:bg-gray-100 rounded-full"
//             >
//               <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 py-6 overflow-y-auto">
//             <div className="space-y-4">{renderNavLinks()}</div>
//           </nav>

//           {/* Logout */}
//           {isAuthenticated && (
//             <div className="border-t p-4">
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg hover:bg-red-50 transition-colors group"
//               >
//                 <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />
//                 <span className="text-gray-700 group-hover:text-gray-900">
//                   Logout
//                 </span>
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//       {/* Rest of the component remains the same */}
//       {/* Desktop Sidebar */}

//       <aside
//         className={`
//           hidden md:flex flex-col fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out
//           ${isSidebarOpen ? "w-64" : "w-20"}
//         `}
//       >
//         <div className="flex flex-col h-full">
//           {/* Desktop Sidebar Header with Toggle */}
//           <div className="flex items-center justify-between p-4 border-b">
//             {isSidebarOpen ? (
//               <Link to="/" className="flex items-center space-x-2">
//                 <BookOpen className="h-8 w-8 text-indigo-600" />
//                 <span className="text-2xl font-bold text-gray-900">
//                   EduFlow
//                 </span>
//               </Link>
//             ) : (
//               <Link to="/" className="mx-auto">
//                 <BookOpen className="h-8 w-8 text-indigo-600" />
//               </Link>
//             )}

//             {/* Sidebar Toggle Button */}
//             <button
//               className="ml-auto p-1 hover:bg-gray-100 rounded-full"
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             >
//               {isSidebarOpen ? (
//                 <ChevronsLeft className="h-6 w-6" />
//               ) : (
//                 <ChevronsRight className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 py-4 overflow-y-auto">
//             <div className="space-y-1">
//               {React.Children.map(renderNavLinks(), (child) =>
//                 React.cloneElement(child, {
//                   children: isSidebarOpen ? (
//                     child.props.children
//                   ) : (
//                     <span className="sr-only">{child.props.children}</span>
//                   ),
//                 })
//               )}
//             </div>
//           </nav>

//           {/* Logout */}
//           {isAuthenticated && (
//             <div className="border-t p-4">
//               <button
//                 onClick={handleLogout}
//                 className={`
//                   flex items-center space-x-3 w-full px-4 py-2 rounded-lg
//                   hover:bg-red-50 transition-colors group
//                   ${isSidebarOpen ? "" : "justify-center"}
//                 `}
//               >
//                 <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />
//                 {isSidebarOpen && (
//                   <span className="text-gray-700 group-hover:text-gray-900">
//                     Logout
//                   </span>
//                 )}
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  LogIn,
  UserPlus,
  Menu,
  X,
  User,
  ShoppingCart,
  Grid,
  BookOpenCheck,
  Library,
  Settings,
  LogOut,
  Home,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function SidebarNavigation({ isSidebarOpen, setIsSidebarOpen }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { items } = useCart();

  // Mock authentication state - this would typically come from an auth context
  const isAuthenticated = true;
  const userRole = "student"; // Possible values: 'student', 'college', 'tutor', 'admin' from {user.role}

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Close mobile sidebar when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMobileSidebarOpen(false);
  };

  const NavLink = ({ to, icon: Icon, children, onClick }) => {
    return (
      <Link
        to={to}
        className={`
          flex items-center space-x-3 px-6 py-3 rounded-full 
          hover:bg-indigo-50 transition-all duration-300 ease-in-out
          group relative
        `}
        onClick={onClick}
      >
        <Icon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-600" />

        <span
          className={`
            text-gray-700 group-hover:text-gray-900
            ${isSidebarOpen ? "visible" : "hidden"}
            transition-all duration-300
          `}
        >
          {children}
        </span>
      </Link>
    );
  };

  const renderNavLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <NavLink to="/login" icon={LogIn}>
            Login
          </NavLink>
          <NavLink to="/register" icon={UserPlus}>
            Sign Up
          </NavLink>
        </>
      );
    }

    switch (userRole) {
      case "student":
        return (
          <>
            <NavLink to="/" icon={Home}>
              Home
            </NavLink>
            <NavLink to="/courses" icon={Library}>
              Courses
            </NavLink>
            <NavLink to="/student/dashboard" icon={Grid}>
              Dashboard
            </NavLink>
            <NavLink to="/student/courses" icon={BookOpenCheck}>
              My Courses
            </NavLink>
            <NavLink to="/cart" icon={ShoppingCart}>
              Cart{" "}
              {totalItems > 0 && (
                <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <NavLink to="/settings" icon={Settings}>
              Settings
            </NavLink>
            <NavLink to="/settings" icon={User}>
              Profile
            </NavLink>
          </>
        );
      // Rest of the roles remain the same as in the previous implementation
      case "tutor":
        return (
          <>
            <NavLink to="/" icon={Home}>
              Home
            </NavLink>
            <NavLink to="/courses" icon={Library}>
              Courses
            </NavLink>
            <NavLink to="/tutor/dashboard" icon={Grid}>
              Dashboard
            </NavLink>
            <NavLink to="/tutor/courses" icon={BookOpenCheck}>
              My Courses
            </NavLink>
            <NavLink to="/cart" icon={ShoppingCart}>
              Cart{" "}
              {totalItems > 0 && (
                <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <NavLink to="/settings" icon={Settings}>
              Settings
            </NavLink>
            <NavLink to="/settings" icon={User}>
              Profile
            </NavLink>
          </>
        );
      case "college":
        return (
          <>
            <NavLink to="/" icon={Home}>
              Home
            </NavLink>
            <NavLink to="/courses" icon={Library}>
              Courses
            </NavLink>
            <NavLink to="/college/dashboard" icon={Grid}>
              Dashboard
            </NavLink>
            <NavLink to="/college/courses" icon={BookOpenCheck}>
              My Courses
            </NavLink>
            <NavLink to="/cart" icon={ShoppingCart}>
              Cart{" "}
              {totalItems > 0 && (
                <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <NavLink to="/settings" icon={Settings}>
              Settings
            </NavLink>
            <NavLink to="/settings" icon={User}>
              Profile
            </NavLink>
          </>
        );
      case "admin":
        return (
          <>
            <NavLink to="/" icon={Home}>
              Home
            </NavLink>
            <NavLink to="/courses" icon={Library}>
              Courses
            </NavLink>
            <NavLink to="/admin/dashboard" icon={Grid}>
              Dashboard
            </NavLink>
            <NavLink to="/settings" icon={Settings}>
              Settings
            </NavLink>
            <NavLink to="/settings" icon={User}>
              Profile
            </NavLink>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? "" : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
            md:hidden rounded-r-3xl
            ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">EduFlow</span>
            </Link>
            {/* Close Button on the Right */}
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="ml-auto p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6 overflow-y-auto">
            <div className="space-y-4">{renderNavLinks()}</div>
          </nav>

          {/* Logout */}
          {isAuthenticated && (
            <div className="border-t p-4">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg hover:bg-red-50 transition-colors group"
              >
                <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Logout
                </span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden md:flex flex-col fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-64" : "w-20"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Desktop Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            {isSidebarOpen ? (
              <Link to="/" className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-bold text-gray-900">
                  EduFlow
                </span>
              </Link>
            ) : (
              <Link to="/" className="mx-auto">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </Link>
            )}

            {/* Sidebar Toggle Button */}
            <button
              className="ml-auto p-1 hover:bg-gray-100 rounded-full"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <ChevronsLeft className="h-6 w-6" />
              ) : (
                <ChevronsRight className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <div className="space-y-1">{renderNavLinks()}</div>
          </nav>

          {/* Logout */}
          {isAuthenticated && (
            <div className="border-t p-4">
              <button
                onClick={handleLogout}
                className={`
                  flex items-center space-x-3 w-full px-4 py-2 rounded-lg
                  hover:bg-red-50 transition-colors group relative
                  ${isSidebarOpen ? "" : "justify-center"}
                `}
              >
                <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-600" />

                {isSidebarOpen && (
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Logout
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
