import Productcard from "./ProductCard"

const products=[
    { id:1,name:"Laptop",price:890 },
    { id:2,name:"Phone",price:1890 },
    { id:3,name:"Headphones",price:8910 },
    { id:4,name:"keyboard",price:89340 },
    { id:5,name:"Mouse",price:8440 },
]

export default function ProductList(){
    return(
        <div className="row">
            {products.map((p)=>(
                <div key={p.id} className="col-md-3 mb-4">
                  <Productcard product={p} />
                </div>
            ))}
                
       
      </div>
    )

}