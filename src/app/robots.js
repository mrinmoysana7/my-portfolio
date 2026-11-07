export default function robots() {
    const baseUrl = "https://mrinmoy-portfolio.vercel.app";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}