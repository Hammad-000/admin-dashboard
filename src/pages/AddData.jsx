import React, { useState } from 'react';

const AddData = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();


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
        <div className="justify-center flex p-10">
            <div className="flex text-center  flex-col gap-4 w-3/6">
            <h2 className="text-white p-3 rounded-lg bg-gray-800">Add New Product Data</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        className="p-3  border-2 w-full rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        className="p-3  border-2 w-full rounded-lg"
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
                        className="p-3  border-2 w-full rounded-lg"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                        type="text"
                        className="p-3  border-2 w-full rounded-lg"
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
                        className="p-3  border-2 w-full rounded-lg"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="bg-yellow-500  border border-black rounded-lg text-white p-2 w-40  mt-4">Add Product</button>
            </form>

                        </div>
        </div>
    );
};

export default AddData;
