import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";

const categories = [
	{ href: "/Running", name: "Running", imageUrl: "/running.jpg" },
	{ href: "/Formal", name: "Formal", imageUrl: "/formal.jpg" },
	{ href: "/Casual", name: "Casual", imageUrl: "/casual.jpg" },
	{ href: "/School", name: "School", imageUrl: "/sekolah.jpg" },
	{ href: "/Basketball", name: "Basketball", imageUrl: "/basket.jpg" },
	{ href: "/Hiking", name: "Hiking", imageUrl: "/hiking.jpeg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-amber-900 overflow-x-hidden'>
			{/* Hero Section with Products from Database */}
			<HeroSection 
				heroProducts={products.slice(0, 5)} // Ambil 5 produk pertama untuk hero
				isLoading={isLoading} 
			/>

			{/* Categories Section */}
			<div className='relative z-10 bg-gradient-to-b from-transparent via-amber-50/50 to-orange-50/50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
					{/* Section Header */}
					<div className="text-center mb-12">
						<h1 className='text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 bg-clip-text mb-4'>
							Jelajahi Kategori Kami
						</h1>
						<p className='text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed'>
							Jelajahi produk dengan kualitas terbaik yang di desain mengikuti gaya hidup anda
						</p>
						
						{/* Decorative line */}
						<div className="flex items-center justify-center mt-8 mb-12">
							<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
							<div className="w-3 h-3 bg-orange-500 rounded-full mx-4"></div>
							<div className="w-24 h-1 bg-gradient-to-l from-amber-400 to-orange-400 rounded-full"></div>
						</div>
					</div>

					{/* Categories Grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{categories.map((category) => (
							<CategoryItem category={category} key={category.name} />
						))}
					</div>
				</div>
			</div>

			{/* Featured Products Section */}
			{!isLoading && products.length > 0 && (
				<div className='relative z-10 bg-gradient-to-b from-orange-50/50 to-amber-50'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
						{/* Featured Products Header */}
						<div className="text-center mb-12">
							<h2 className='text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 bg-clip-text mb-4'>
								Featured Products
							</h2>
							<p className='text-lg text-amber-700 max-w-xl mx-auto'>
								Handpicked selections from our premium collection, featuring the finest quality and latest designs.
							</p>
						</div>
						
						<FeaturedProducts featuredProducts={products.slice(5)} />
					</div>
				</div>
			)}

			{/* Bottom Section with Call to Action */}
			<div className='relative z-10 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 py-20'>
				<div className='max-w-4xl mx-auto text-center px-4'>
					<h3 className='text-3xl md:text-4xl font-bold text-amber-900 mb-6'>
						Ready to Step Into Style?
					</h3>
					<p className='text-xl text-amber-700 mb-8 max-w-2xl mx-auto'>
						Join thousands of satisfied customers who trust us for their footwear needs. Quality, comfort, and style in every step.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button className='bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
							Shop All Products
						</button>
						<button className='border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'>
							View Collections
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;