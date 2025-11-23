/**
 * TinaCMS Client Example
 *
 * This file demonstrates how to use the auto-generated TinaCMS client.
 * After running `pnpm dev` or `pnpm build`, TinaCMS generates a client
 * at `tina/__generated__/client`.
 */
// Import the auto-generated client
import client from "../tina/__generated__/client";

// Export as default for convenience
export default client;

/**
 * Example: Fetch a single document by relativePath
 *
 * Usage in a page component:
 *
 * export default async function BlogPost({ params }: { params: { slug: string } }) {
 *   const data = await fetchPost(params.slug);
 *   return <div>{data.post.title}</div>;
 * }
 */
export async function fetchPost(relativePath: string) {
  // Uncomment after first build:
  /*
  const response = await client.queries.post({
    relativePath: `${relativePath}.mdx`,
  });

  return response.data;
  */

  // Temporary placeholder
  return null;
}

/**
 * Example: Fetch a list of documents using connection
 *
 * Usage in a page component:
 *
 * export default async function BlogList() {
 *   const data = await fetchAllPosts();
 *   return (
 *     <div>
 *       {data.postConnection.edges.map((edge) => (
 *         <div key={edge.node.id}>{edge.node.title}</div>
 *       ))}
 *     </div>
 *   );
 * }
 */
export async function fetchAllPosts() {
  // Uncomment after first build:
  /*
  const response = await client.queries.postConnection();

  return response.data;
  */

  // Temporary placeholder
  return null;
}

/**
 * Example: Fetch services
 *
 * Usage:
 *
 * export default async function ServicesPage() {
 *   const data = await fetchAllServices();
 *   return (
 *     <div>
 *       {data.serviceConnection.edges.map((edge) => (
 *         <ServiceCard key={edge.node.id} service={edge.node} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export async function fetchAllServices() {
  // Uncomment after first build:
  /*
  const response = await client.queries.serviceConnection();

  return response.data;
  */

  // Temporary placeholder
  return null;
}

/**
 * Example: Fetch a single service by relativePath
 */
export async function fetchService(relativePath: string) {
  // Uncomment after first build:
  /*
  const response = await client.queries.service({
    relativePath: `${relativePath}.json`,
  });

  return response.data;
  */

  // Temporary placeholder
  return null;
}

/**
 * Example: Fetch site settings
 *
 * Usage:
 *
 * export default async function Hero() {
 *   const data = await fetchSiteSettings();
 *   const hero = data.settings.hero;
 *
 *   return (
 *     <section>
 *       <h1>{hero.title}</h1>
 *       <p>{hero.description}</p>
 *     </section>
 *   );
 * }
 */
export async function fetchSiteSettings() {
  // Uncomment after first build:
  /*
  const response = await client.queries.settings({
    relativePath: 'site.json',
  });

  return response.data;
  */

  // Temporary placeholder
  return null;
}

/**
 * Example: Fetch testimonials
 */
export async function fetchAllTestimonials() {
  // Uncomment after first build:
  /*
  const response = await client.queries.testimonialConnection();

  return response.data;
  */

  // Temporary placeholder
  return null;
}
