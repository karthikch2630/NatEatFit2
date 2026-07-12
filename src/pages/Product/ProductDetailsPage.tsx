import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Leaf, ChefHat, ShoppingBag } from 'lucide-react';

// Imports adjusted for our architecture
import { ALL_PRODUCTS } from '../../data/productsData';
import { useCartStore } from '../../store/cartStore';
import { getCustomizationsForProduct } from '../../data/customizationData';
import CustomizeModal from '../../components/ui/CustomizeModal';

const parsePrice = (price: string | number): number => {
  if (typeof price === 'number') return price;
  return Number(price.replace(/[^\d.]/g, '')) || 0;
};

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // 1. FIX: Auto-scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // 2. FIX: Safer, case-insensitive product lookup directly in the component
  const product = ALL_PRODUCTS.find(
    (item) => item.slug.toLowerCase() === slug?.toLowerCase()
  );
  
  const addItem = useCartStore((state) => state.addItem);
  const [showCustomize, setShowCustomize] = useState(false);

  // --- 404 STATE (Product Not Found) ---
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FDFBF7] px-6 text-center">
        <div className="w-20 h-20 bg-[#F3F2EE] rounded-full flex items-center justify-center mb-2">
          <ShoppingBag size={32} className="text-[#8C877D]" />
        </div>
        <h1 className="text-2xl font-black text-[#1F452A] font-bosch">Product not found</h1>
        <p className="text-[#5C5950] max-w-sm">
          We couldn't find the item: <span className="font-bold text-[#D94545]">{slug}</span>
        </p>
        <Link to="/menu" className="mt-4 px-8 py-3.5 bg-[#425440] text-white rounded-full font-bold text-sm hover:bg-[#2A5C38] transition-colors">
          Explore Menu
        </Link>
      </div>
    );
  }

  // Check if product has customizations available
 const hasCustomizations = getCustomizationsForProduct(product.category, product.slug).length > 0;

  const handleAddToCart = () => {
    if (hasCustomizations) {
      setShowCustomize(true);
      return;
    }
    
    // Direct Add for items with no customizations
    const basePrice = parsePrice(product.price);
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      basePrice,
      image: product.image,
      category: product.category,
      addOns: [],
      unitPrice: basePrice,
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-32 md:pb-24 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation */}
        <div className="mb-8 md:mb-12">
          <Link
            to={`/menu/${product.category.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#8C877D] hover:text-[#2A5C38] transition-colors"
          >
            <ArrowLeft size={16} /> 
            Back to {product.category}
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-[#F9F8F4] shadow-sm border border-[#F0EFE9]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Ultra-minimal Diet Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-sm">
                {product.dietType === 'veg' ? <Leaf size={14} className="text-[#2A5C38]" /> : <ChefHat size={14} className="text-[#D94545]" />}
                <span className={`text-[10px] font-black uppercase tracking-widest ${product.dietType === 'veg' ? 'text-[#2A5C38]' : 'text-[#D94545]'}`}>
                  {product.dietType}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Elegant Product Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col pt-2 lg:pt-8"
          >
            <div className="mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C877D]">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-[#1F452A] font-bosch leading-tight mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg text-[#5C5950] leading-relaxed mb-8">
              {product.desc}
            </p>

            {/* Price (Desktop) */}
            <div className="hidden md:block mb-8">
              <span className="text-4xl font-black text-[#2A5C38]">{product.price}</span>
            </div>

            {/* Desktop Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="hidden md:flex w-full md:w-auto px-12 py-4 bg-[#425440] text-white font-bold text-lg rounded-full hover:bg-[#2A5C38] transition-all items-center justify-center gap-3 mb-12 shadow-md hover:shadow-lg"
            >
              <ShoppingBag size={20} />
              {hasCustomizations ? 'Customize & Add' : `Add to Cart — ${product.price}`}
            </button>

            {/* Clean Typographic Macros Row */}
            <div className="border-y border-[#EBE8DE] py-6 mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C877D] font-bold mb-1">Calories</span>
                  <span className="text-xl font-black text-[#2C1810]">{product.calories}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C877D] font-bold mb-1">Protein</span>
                  <span className="text-xl font-black text-[#2C1810]">{product.protein}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C877D] font-bold mb-1">Carbs</span>
                  <span className="text-xl font-black text-[#2C1810]">{product.carbs}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C877D] font-bold mb-1">Weight</span>
                  <span className="text-xl font-black text-[#2C1810]">{product.weight}</span>
                </div>
              </div>
            </div>

            {/* Minimalist Preparation & Benefits */}
            <div className="space-y-8">
              {product.preparation && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1F452A] mb-3 border-l-2 border-[#2A5C38] pl-3">
                    How it's prepared
                  </h3>
                  <p className="text-[#5C5950] leading-relaxed whitespace-pre-line text-sm pl-4">
                    {product.preparation}
                  </p>
                </div>
              )}

              {product.benefits && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1F452A] mb-3 border-l-2 border-[#8FB373] pl-3">
                    Health Benefits
                  </h3>
                  <p className="text-[#5C5950] leading-relaxed whitespace-pre-line text-sm pl-4">
                    {product.benefits}
                  </p>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#EBE8DE] p-4 px-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#8C877D] uppercase tracking-widest">Total</span>
            <span className="text-2xl font-black text-[#2A5C38]">{product.price}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 py-4 bg-[#425440] text-white font-bold rounded-full hover:bg-[#2A5C38] transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            {hasCustomizations ? 'Customize' : 'Add'}
          </button>
        </div>
      </div>

      {/* Customization Modal */}
      <AnimatePresence>
        {showCustomize && (
          <CustomizeModal
            product={product}
            onClose={() => setShowCustomize(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailPage;