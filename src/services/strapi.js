const API_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchFromStrapi(endpoint) {
  const response = await fetch(
    `${API_URL}/api/${endpoint}?populate=*`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export function getImageUrl(image) {
  if (!image?.url) return "";

  if (image.url.startsWith("http")) {
    return image.url;
  }

  return `${API_URL}${image.url}`;
}