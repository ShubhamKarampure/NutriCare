export default function Hero() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Revolutionize Hospital Meal Management
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Streamline meal planning, preparation, and delivery for improved patient care and satisfaction.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400"
            alt="Hospital Meal Management"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

