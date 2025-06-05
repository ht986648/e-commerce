
import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import React from 'react';
import FormSubmitButton from '@/components/formSubmitButtonts';
const Page = () => {
  async function AddProducts(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);
    // throw new Error("Simulated failure"); // ✅ this will trigger error.tsx
    if (!name || !description || !imageUrl || !price) {
      console.error("Error during data fetching");
      return;
    }

    await prisma.product.create({
      data: { name, description, imageUrl, price },
    });

    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Add Products</h1>
      <form action={AddProducts} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          className="p-2 border rounded"
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          required
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="p-2 border rounded"
        />
        <FormSubmitButton
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </FormSubmitButton>
      </form>
    </div>
  );
};

export default Page;
