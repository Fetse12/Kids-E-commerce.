
  import pic from '../assets/cart.png';

  export default function Product_card({ productData }) {
    return (
            <div className=" max-w-[272px] max-h-[430px] rounded-lg overflow-hidden shadow-lg bg-white m-4">
                    <img
                    className="mt-[15px] ml-[10px] mr-[5px] w-[250px] h-[300px] flex justify-center"
                    src={productData.imageURLs[0]} // Use the first image in the array
                    alt={productData.name}
                    />
                    <div className="p-2">
                    <h2 className="font-bold mb-1">{productData.name}</h2>
                    <div className="flex justify-between">
                        <p className="font-bold">{productData.regularPrice}</p>
                        <div className="flex justify-end">
                        <button className="bg-[#F5EDED] text-black rounded-full border-2 flex py-2 px-4">
                            Add to Cart <img className="h-[20px]" src={pic} alt="" />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

     
    );
  }
  
  
  