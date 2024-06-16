import './CreateProduct.css' 
import { useState } from 'react';
 
function CreateProduct(){

    let[product,setProduct] = useState({});
    function handleInput(prop)
    {
        let copyProduct = {...product}
        copyProduct[event.target.name] = event.target.value 
        setProduct(copyProduct)


        // This is a short hand method...

        //  setproduct({ ...product, [event.target.name]:event.target.value });

        console.log(product)

    }
    function handleSubmit()
    {
        event.preventDefault()
        console.log(product)

        fetch("url",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/jsaon"
            }
        })
        .then((response)=>{})
        .catch((err)=>{})
    }
        
    

    return(


    <section className="form-parent">
        <form className="form" onSubmit={handleSubmit}>

            <h1>Add Product</h1>

            {name}
            <input className="inp" name="name" type="text" placeholder="Enter Name" required 
            onChange={handleInput} 
            />
            <input className="inp" name="price" type="text" placeholder="Enter Price"required
            onChange={handleInput} />

            <input className="inp"  name="Category" type="text" placeholder="Enter Category"required
            onChange={handleInput} />

            <input className="inp"  name="Quantity" type="number" placeholder="Enter Quantity"required
            onChange={handleInput} />

            <input className="inp"  name="Description" type="text" placeholder="Enter Description"required
            onChange={handleInput}/>

            <button type="submit"className='btn'onClick={handleSubmit}>Submit</button>


        </form>
        
    </section>
)}

export default CreateProduct