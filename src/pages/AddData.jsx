import React, { useState } from 'react';

const AddData = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State to track success message

    const handleSubmit = (e) => {
        e.preventDefault();

        // Data validation
        if (!name || !description || !price || !category || !rating) {
            setError('All fields are required!');
            setSuccess('');
            return;
        }

        if (parseFloat(price) <= 0) {
            setError('Price must be greater than 0.');
            setSuccess('');
            return;
        }

        if (parseFloat(rating) < 1 || parseFloat(rating) > 5) {
            setError('Rating must be between 1 and 5.');
            setSuccess('');
            return;
        }

        const newProduct = {
            title: name,
            description,
            price: parseFloat(price),
            category,
            rating: parseFloat(rating),
        };

        // POST request to add product to db.json (json-server)
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('New product added:', data);
            // Clear the form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setRating('');
            setError('');
            setSuccess('Product added successfully!');
        })
        .catch((error) => {
            console.error("Error adding product:", error);
            setError('Failed to add the product.');
            setSuccess('');
        });
    };

    return (
        <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-center m-10">Add New Product Data</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-80">
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        className="border p-2 w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label>Category</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div>
                    <label>Rating</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        className="border p-2 w-full"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-4">Add Product</button>
            </form>
        </div>
    );
};

export default AddData;
