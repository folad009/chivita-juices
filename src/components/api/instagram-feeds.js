
export default async function handler(req, res) {
    try {
      const response = await fetch("https://a40.355.mytemp.website/chivita-juices-backend/wp-json/wp/v2/pages?slug=instagram");
      const pages = await response.json();
  
      if (!pages.length) {
        return res.status(404).json({ error: "Instagram page not found" });
      }
  
      res.status(200).json({ content: pages[0].content.rendered });
    } catch (error) {
      console.error("Error fetching WordPress page:", error);
      res.status(500).json({ error: "Failed to fetch content" });
    }
  }
  