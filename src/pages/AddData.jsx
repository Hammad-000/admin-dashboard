import React, { useState } from 'react';
import { 
  Plus, 
  Package, 
  DollarSign, 
  Tag, 
  Star, 
  AlertCircle,
  CheckCircle,
  XCircle 
} from 'lucide-react';

const AddData = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        'Electronics',
        'Clothing',
        'Books',
        'Home & Kitchen',
        'Beauty',
        'Sports',
        'Toys',
        'Food',
        'Other'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        // Validation
        if (!name || !description || !price || !category || !rating) {
            setError('All fields are required!');
            return;
        }

        if (parseFloat(price) <= 0) {
            setError('Price must be greater than 0.');
            return;
        }

        const ratingValue = parseFloat(rating);
        if (ratingValue < 1 || ratingValue > 5) {
            setError('Rating must be between 1 and 5.');
            return;
        }

        setIsSubmitting(true);

        const newProduct = {
            title: name,
            description,
            price: parseFloat(price),
            category,
            rating: ratingValue,
            image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=600&q=80`,
            createdAt: new Date().toISOString(),
        };

        try {
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const data = await response.json();
            console.log('New product added:', data);
            
            // Reset form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setRating('');
            setSuccess('Product added successfully!');
            
            // Auto-clear success message after 5 seconds
            setTimeout(() => setSuccess(''), 5000);
            
        } catch (error) {
            console.error("Error adding product:", error);
            setError('Failed to add the product. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
                        <Package className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Add New Product</h1>
                    <p className="text-gray-600">Fill in the details below to add a new product to your store</p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Form Header */}
                    <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg mr-4">
                                <Plus className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Product Information</h2>
                                <p className="text-sm text-gray-600">All fields marked with * are required</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-8">
                        {/* Success/Error Messages */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <div className="flex items-center">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                                    <span className="text-red-700 font-medium">{error}</span>
                                </div>
                            </div>
                        )}

                        {success && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    <span className="text-green-700 font-medium">{success}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Product Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    <span className="flex items-center">
                                        <Package className="w-4 h-4 mr-2" />
                                        Product Name *
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter product name"
                                    />
                                    <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description *
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-h-[120px]"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter detailed product description"
                                />
                            </div>

                            {/* Price and Category Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Price */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        <span className="flex items-center">
                                            <DollarSign className="w-4 h-4 mr-2" />
                                            Price *
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                        <input
                                            type="number"
                                            min="0.01"
                                            step="0.01"
                                            className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        <span className="flex items-center">
                                            <Tag className="w-4 h-4 mr-2" />
                                            Category *
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                        <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    <span className="flex items-center">
                                        <Star className="w-4 h-4 mr-2" />
                                        Rating (1-5) *
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="1"
                                        max="5"
                                        step="0.1"
                                        className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                        placeholder="Enter rating from 1 to 5"
                                    />
                                    <Star className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                                {/* Rating Preview */}
                                {rating && (
                                    <div className="flex items-center mt-2">
                                        <span className="text-sm text-gray-600 mr-3">Preview:</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    className={`w-5 h-5 ${
                                                        index < Math.floor(parseFloat(rating) || 0)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-sm font-medium text-gray-700">
                                            {parseFloat(rating).toFixed(1)}/5
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Adding Product...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="w-5 h-5 mr-2" />
                                            Add Product
                                        </>
                                    )}
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={() => {
                                        setName('');
                                        setDescription('');
                                        setPrice('');
                                        setCategory('');
                                        setRating('');
                                        setError('');
                                        setSuccess('');
                                    }}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                                >
                                    <span className="flex items-center justify-center">
                                        <XCircle className="w-5 h-5 mr-2" />
                                        Clear All
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Form Tips */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                        Quick Tips
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700">Use descriptive names that customers can easily understand</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700">Include key features and benefits in the description</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700">Price should be competitive and reflect product value</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700">Accurate category helps customers find your product</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddData;