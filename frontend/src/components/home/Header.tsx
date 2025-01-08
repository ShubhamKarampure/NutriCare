import { Utensils } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Utensils size={24} />
          <span className="text-xl font-bold">NutriCare</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-200">Home</a></li>
            <li><a href="#" className="hover:text-green-200">Features</a></li>
            <li><a href="#" className="hover:text-green-200">Pricing</a></li>
            <li><a href="#" className="hover:text-green-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

