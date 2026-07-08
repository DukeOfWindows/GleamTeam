
export default function getTestimonialsByService(tags, testimonials) {
  if (!Array.isArray(tags)) tags = [tags]; // ensure it's an array

  return testimonials.filter(t =>
    Array.isArray(t.service) &&
    tags.some(tag => t.service.includes(tag)) // match ANY tag
  );
}