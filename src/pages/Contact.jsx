import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Form */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Left: Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out to me for collaborations or just a
              friendly chat. I’d love to hear from you!
            </p>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sibusundardas00@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  sibusundardas00@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +91-8618604933
              </p>
              <p>
                <strong>Location:</strong> Bangalore, India
              </p>
            </div>
            <div className="mt-8 space-x-4">
              <a
                href="https://www.github.com/sibu02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sibusundardas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
