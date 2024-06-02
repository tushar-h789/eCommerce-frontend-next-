import React from 'react'

const SingleProductId = ({params}) => {
    console.log(params);
  return (
    <div>
        {params.singleProductId}
    </div>
  )
}

export default SingleProductId