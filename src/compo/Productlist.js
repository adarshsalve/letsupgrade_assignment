import Product from "./Product"
// import { useStatie } from "react"

export default function Productlist(){
    let productlist=[
        {id:"1",name:"RDR 2",price:"2000",url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F44%2FRed_Dead_Redemption_II.jpg&tbnid=kuKaVYy4p4MijM&vet=12ahUKEwjJuPL0of2CAxWWkmMGHZ9TBM8QMygAegQIARBs..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRed_Dead_Redemption_2&docid=dbNEghSAdJ1QLM&w=284&h=350&q=rdr2&ved=2ahUKEwjJuPL0of2CAxWWkmMGHZ9TBM8QMygAegQIARBs"},
        {id:"2",name:"GTA 5",price:"10000",url:"https://en.wikipedia.org/wiki/Grand_Theft_Auto_V"},
        {id:"3",name:"GTA 6",price:110000,url:"https://www.npr.org/2023/12/05/1217404605/gta-6-grand-theft-auto-vi-trailer-release-date-details-city-game-play"},
      
    ]

    
    return(
        <div className="productlist">
            {
                
                productlist.map((productli)=>{
                    return(
                        <Product name={productli.name} price={productli.price} url={productli.url} key={productli.id} />

                        /* <Product name="RTX 2070" price="35000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n207swf3oc-8gd-1-270x270.jpg"  />
                        <Product name="RTX 2080" price="59000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n2080gaming-oc-8gc-1-270x270.jpg"  />
                        <Product name="RTX 3090" price="110000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n3090turbo-24gd-1-1000x1000.jpg" />
                        <Product name="RTX 4090" price="180000" url="https://www.thevaluestore.in/image/cache/wp/gj/2023/Graphics-Card/Gigabyte/gv-n4090wf3-24gd-1-1000x1000.webp" /> */
                            
                        
                    )
                }

                )

            }

        
           
        
        </div>
    )
}