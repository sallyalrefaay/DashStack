// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal";
import {Link , useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const token = localStorage.getItem("token");
const Products = () => {
    const [productCard, setProducts] = useState([
        {
            id: 1,
            image: '/DashStack/assets/products/1.png', 
            title: 'Product 1',
            price: '$300'
        },
        {
            id: 2,
            image: '/DashStack/assets/products/2.png', 
            title: 'Product 2',
            price: '$300'
        },
        {
            id: 3,
            image: '/DashStack/assets/products/3.png', 
            title: 'Product 3',
            price: '$560'
        },
        {
            id: 4,
            image: '/DashStack/assets/products/4.png', 
            title: 'Product 4',
            price: '$200'
        },
        {
            id: 5,
            image: '/DashStack/assets/products/5.png', 
            title: 'Product 5',
            price: '$300.00'
        },
        {
            id: 6,
            image: '/DashStack/assets/products/6.png', 
            title: 'Product 6',
            price: '$200.00'
        }
    ])
        const { id } = useParams();
        const [darkMode, setDarkMode] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedProduct, setSelectedProduct] = useState(null);
        const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
        };
        useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const response = axios
            .get("https://vica.website/api/items", {
            headers: {
                "Content-Type": "multipart/form-data",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`,
            },
            })
            .then(function (response) {
            console.log(response.data);
            const f = response.data;
            for (let i = 0; i < f.length; i++) {
                const product = f[i];
                setProducts((prevProducts) => [
                ...prevProducts,
                {
                    id: product.id,
                    image: product.image_url,
                    title: product.name,
                    price: `$${product.price}`,
                },
                ]);
            }
            })
            .catch(function (error) {
            console.log(error);
            });
        }, []);
        const openModal = (product) => {
            setSelectedProduct(product);
            setIsModalOpen(true);
        };
        
        const closeModal = () => {
            setIsModalOpen(false);
            setSelectedProduct(null);
        };
        
        const handleDeleteProduct = (id) => {
            axios.delete(`https://vica.website/api/items/${id}`)
            .then(()=>{
            setProducts(productCard.filter((p) => p.id !== selectedProduct.id));
            toast.success(`Deleted ${selectedProduct.title}`);
            closeModal();
            })
            .catch(error=>{
            console.log(error);
            });
        };
        
        const filteredProducts = productCard.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    return (
    <>
        <Sidebar></Sidebar>
        <Modal
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        onConfirm={() => handleDeleteProduct(selectedProduct.id)} />
        <div className="">
        <input className={`fixed top-4 left-0 z-10 ml-96 p-4 border-2 border-slate-200 bg-none rounded-full w-96 h-10 
        ${darkMode ? 'dark border-gray-600 bg-gray-700' : 'bg-gray-100'}`}
        type="text" placeholder='Search a product ..' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className={`bg-none ml-96 px-5 py-6 ${darkMode ? "dark:bg-gray-800 text-white" : ""}`}>
        <div className={`mb-6 flex justify-between ${darkMode ? "dark bg-gray-800" : ""}`}>
            <h1 className={`font-bold text-xl text-black-70 ${darkMode ? "text-white" : ""}`}>
                All Products
            </h1>
            <Link to="/Create">
                <button type="submit"
                className="flex items-center justify-center gap-2 bg-sky-600 text-white w-40 h-10 rounded-md">
                <img src="public/assets/icons/creatProduct.png" alt="" />
                Create Product
                </button>
            </Link>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <div key={product.id} className={`h-80 p-5 bg-gradient-to-b from-gray-100 gray-200 rounded-xl shadow-md ${darkMode ? "dark bg-gray-800" : ""}`}>
                <div className="h-32 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <p className="text-sky-500 mt-2">{product.price}</p>
                    <div className="flex justify-between items-center">
                    <Link to={`/Edit/${id}`}>
                        <button className="w-40 bg-gray-300 text-black px-5 py-2 rounded-full mt-4">
                        Edit Product
                        </button>
                    </Link>
                    <img src="/DashStack/assets/icons/trash-03.png" className="w-15 py-2 cursor-pointer"alt="Delete"onClick={() => openModal(product)}/>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </>
    )
}
export default Products