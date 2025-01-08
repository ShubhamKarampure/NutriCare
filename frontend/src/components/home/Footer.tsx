import { Utensils } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Utensils size={24} />
            <span className="text-xl font-bold">NutriCare</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><a href="#" className="hover:text-green-200">Home</a></li>
              <li><a href="#" className="hover:text-green-200">Features</a></li>
              <li><a href="#" className="hover:text-green-200">Pricing</a></li>
              <li><a href="#" className="hover:text-green-200">Contact</a></li>
              <li><a href="#" className="hover:text-green-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-200">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-green-200">
          © {new Date().getFullYear()} NutriCare. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

