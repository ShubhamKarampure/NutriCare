import { Utensils, Calendar, ClipboardList, UserCheck } from 'lucide-react'

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-green-600" />,
    title: 'Menu Planning',
    description: 'Create diverse, nutritious menus tailored to patient dietary needs and preferences.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-green-600" />,
    title: 'Meal Scheduling',
    description: 'Efficiently schedule meal preparation and delivery times for optimal patient care.',
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-green-600" />,
    title: 'Inventory Management',
    description: 'Track food inventory, reduce waste, and streamline procurement processes.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-green-600" />,
    title: 'Dietary Compliance',
    description: 'Ensure meals meet individual patient dietary restrictions and nutritional requirements.',
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
              <p className="text-green-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

