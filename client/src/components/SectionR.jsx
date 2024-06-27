import React from 'react'

const SectionR = () => {
  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by patients and healthcare professionals</h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
      From appointment scheduling to patient records and billing, we offers  seamless experience, making healthcare accessible and manageable for everyone involved
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Satisfied Customers</dt>

          <dd className="text-4xl font-extrabold text-green-800 md:text-5xl">1000+</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Booking Service</dt>

          <dd className="text-4xl font-extrabold text-green-800 md:text-5xl">24hrs</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Experienced Doctors</dt>

          <dd className="text-4xl font-extrabold text-green-800 md:text-5xl">50+</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
  )
}

export default SectionR