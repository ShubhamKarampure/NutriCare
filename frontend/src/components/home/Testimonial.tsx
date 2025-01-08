export default function Testimonial() {
  return (
    <section className="bg-green-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <img
            src="https://placehold.co/100x100"
            alt="Sarah Johnson"
            className="w-24 h-24 rounded-full mx-auto mb-6"
          />
          <blockquote className="text-2xl font-light italic mb-6">
            "NutriCare has transformed our hospital's meal service. Our patients are happier, and our staff is more efficient. It's a game-changer for hospital nutrition management."
          </blockquote>
          <cite className="font-semibold">
            - Sarah Johnson, Director of Nutrition Services at Metro Health Hospital
          </cite>
        </div>
      </div>
    </section>
  )
}

