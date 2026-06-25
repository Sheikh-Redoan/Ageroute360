import Button from './Button'

const CTABanner = () => {
  return (
    <section className="bg-brand-navy py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Building the Future of <span className="text-brand-amber">Infrastructure</span>
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Join us in transforming national road infrastructure through transparency and excellence
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary">View Projects</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
