import React from 'react'

const BankLandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">FutureLink Bank</h1>
        <ul className="flex space-x-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Log In</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-blue-900">
          Bank Smarter, Live Better
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Manage your money efficiently with secure and innovative tools
          tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md">
          Join Us Now
        </button>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold text-blue-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>&copy; 2025 FutureLink Bank. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span>Customer Support</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: 'Personal Banking',
    description: 'Enjoy a suite of financial services tailored to your needs.',
  },
  {
    title: 'Business Banking',
    description: 'Empower your business with flexible financial solutions.',
  },
  {
    title: 'Loans & Mortgages',
    description:
      'Turn your dreams into reality with our flexible loan options.',
  },
  {
    title: 'Credit Cards',
    description:
      'Explore exclusive rewards and financial freedom with our credit cards.',
  },
]

export default BankLandingPage
