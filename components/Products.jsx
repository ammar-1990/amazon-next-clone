import Product from "./Product"


const Products = ({data}) => {
  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {data.slice(0,4).map(({id,title,price,description,category,image})=>(
<Product
key={id}
id={id}
title={title}
price={price}
description={description}
category={category}
image={image}
  />
        ))}

<img className="col-span-full block mx-auto " src="https://links.papareact.com/dyz" alt="" />
        <div className="md:col-span-2">
        {data.slice(4,5).map(({id,title,price,description,category,image})=>(
<Product
key={id}
id={id}
title={title}
price={price}
description={description}
category={category}
image={image}
  />
        ))}
        </div>

      
        {data.slice(5,data.length).map(({id,title,price,description,category,image})=>(
<Product
key={id}
id={id}
title={title}
price={price}
description={description}
category={category}
image={image}
  />
        ))}
        </div>
       
       

        
  )
}

export default Products