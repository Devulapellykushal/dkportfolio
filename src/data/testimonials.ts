export type Testimonial = {
  name: string;
  quote: string;
  city?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya & Rohan",
    city: "Hyderabad",
    quote:
      "We wanted something more than photos for our anniversary. The cast feels incredibly personal — every time we see it, we’re right back in that moment.",
  },
  {
    name: "Priya K.",
    city: "Secunderabad",
    quote:
      "They came home, were gentle with our newborn, and finished in minutes. The final piece is stunning — our parents cried when we gifted them a family cast.",
  },
  {
    name: "Vikram S.",
    city: "Gachibowli",
    quote:
      "Premium finish and true attention to detail. No mess, no stress — just a beautiful keepsake we’ll keep forever.",
  },
  {
    name: "Meera & Family",
    city: "Kondapur",
    quote:
      "From booking on WhatsApp to delivery, everything felt trustworthy. Highly recommend for families who want a tangible memory.",
  },
  {
    name: "Arjun L.",
    city: "Jubilee Hills",
    quote:
      "I compared DIY kits online — there’s no comparison. Expert hands, better materials, and a result we’re proud to display.",
  },
  {
    name: "Sneha R.",
    city: "Banjara Hills",
    quote:
      "The team explained each step and made us comfortable. It’s not just a product — it’s emotion you can hold.",
  },
];
