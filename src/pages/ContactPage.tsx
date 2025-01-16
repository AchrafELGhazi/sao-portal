import { useState, ChangeEvent, FormEvent } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">SAO Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StaffCard name="John Doe" role="Director" email="john.doe@aui.ma" />
            <StaffCard name="Jane Smith" role="Assistant Director" email="jane.smith@aui.ma" />
            <StaffCard name="Mike Johnson" role="Events Coordinator" email="mike.johnson@aui.ma" />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4} // This is now a number
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

// Add prop types for the StaffCard component
interface StaffCardProps {
  name: string;
  role: string;
  email: string;
}

const StaffCard = ({ name, role, email }: StaffCardProps) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
    <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
  </div>
);

export default ContactPage;
