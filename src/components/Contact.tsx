
import { useState } from "react";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:lisomlunguza8@gmail.com" className="text-gray-800 hover:text-blue-700">
                    lisomlunguza8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:0782908696" className="text-gray-800 hover:text-blue-700">
                    078 290 8696
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Liso15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                </a>
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
