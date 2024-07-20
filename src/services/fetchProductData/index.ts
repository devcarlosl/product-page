import { PRODUCT_QUERY } from "@/queries/product";

export async function fetchProductData() {
  const formData = new FormData();
  formData.append("query", PRODUCT_QUERY);

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCT ?? "", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Network error: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();

    if (json.errors) {
      const message = json.errors
        .map((error: Error) => error.message)
        .join(", ");
      throw new Error(`GraphQL error: ${message}`);
    }

    return JSON.stringify(json.data, null, 2);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
