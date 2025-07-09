import axios from 'axios';

const baseUrl='http://localhost:3002/products'


const  getAllProducts=()=> axios.get(baseUrl)
const  getProductById=(productId)=>axios.get(`${baseUrl}/${productId}`)
const addProduct=(product)=>axios.post(baseUrl,product)
const deleteProduct=(productId)=>axios.delete(`${baseUrl}/${productId}`)
const updateProduct=(productId,product)=>axios.put(`${baseUrl}/${productId}`,product)





export{getAllProducts,getProductById,addProduct,updateProduct,deleteProduct}