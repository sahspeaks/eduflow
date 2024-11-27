import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/auth/Login";
import { CartProvider } from "./context/CartContext";
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourses from "./pages/student/MyCourses";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/layout/Footer";
import CourseCatalog from "./pages/courses/CourseCatalog";
import CourseLearning from "./pages/courses/CourseLearning";
const ProtectedRoute = ({ children, roles }) => {
  // const { user, isLoading } = useAuth();
  const user = { role: "student" };

  const isLoading = false;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <>{children}</>;
};

const Layout = ({ children, fullWidth = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content Area with Transition */}
      <main
        className={`
          transition-all duration-300 ease-in-out 
          min-h-screen 
          md:pl-20 
          ${isSidebarOpen ? "md:pl-64" : "md:pl-20"}
          pt-0
          ${fullWidth ? "" : "container mx-auto px-4 py-8"}
        `}
      >
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Public routes */}
            <Route
              path="/"
              element={
                <Layout fullWidth>
                  <Hero />
                  <Features />
                  <FeaturedCourses />
                  <Footer />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/signup"
              element={
                <Layout>
                  <h1>Signup</h1>
                </Layout>
              }
            />
            <Route
              path="/unauthorized"
              element={
                <Layout>
                  <h1>Unauthorized</h1>
                </Layout>
              }
            />
            <Route
              path="/courses"
              element={
                <Layout>
                  <CourseCatalog />
                </Layout>
              }
            />
            {/* Protected routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute roles={["student"]}>
                  <Layout>
                    <StudentDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/courses"
              element={
                <ProtectedRoute roles={["student"]}>
                  <Layout>
                    <MyCourses />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/courses/:courseId"
              element={
                <ProtectedRoute roles={["student"]}>
                  <Layout>
                    <CourseLearning />
                  </Layout>
                </ProtectedRoute>
              }
            />
            {/* Common routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
