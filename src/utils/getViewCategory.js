export const getViewCategory = async()=>{
    const res = await fetch('http://localhost:7000/api/v1/products/allcategory',{
        cache: 'no-store'
    })
    console.log(res);

    return res.json()
}