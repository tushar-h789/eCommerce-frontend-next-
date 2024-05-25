export const getViewSubCategory = async ()=>{
    const res = await fetch('http://localhost:7000/api/v1/products/viewsubcategory')

    return res.json()
}