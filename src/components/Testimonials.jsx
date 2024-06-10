import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-10 tracking-wide">
        What People are {" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-800 mb-10 text-transparent bg-clip-text">
          Saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 text-white rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col justify-between h-full">
              <div className="flex-grow">
                <p>{testimonial.text}</p>
              </div>
              <div className="flex items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
