export default function sitemap() {
    const baseUrl = "https://mrinmoy-portfolio.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
    ];
}