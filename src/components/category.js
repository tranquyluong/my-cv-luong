import { useEffect, useState } from "../../lib";

const category = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:3000/category").then(res => res.json()).then(data => setData(data));

    }, []);
    return `       <div class="w-full bg-[#EDF7FA] mt-9 ">
        <div class=" max-w-7xl  mx-auto md:flex justify-center md:justify-between py-5 px-5">
            <h2 class="text-[22px] text-center md:text-left">
                Recent post
            </h2>
            <a href="" class="hidden md:inline-block text-[#00A8CC] ">View all</a>
        </div>
        <div id="productPosts" class="grid md:grid-cols-2 md:gap-8 justify-between mx-auto max-w-7xl px-5">
             ${data.map((product) => {
        return `    <div class=" bg-[#FFFFFF] spmace-x-2 t-2 mb-8 p-3 hover:drop-shadow-2xl">
                    <h2 class="font-bold text-[26px] px-4">${product.title}</h2>
                    <div class="mt-4 px-3 ">
                    <span class="text[18px]">${product.date}</span>
                    <span class="px-2">|</span>
                    <span class="text-[18px]">Figma, Icon Design</span>
                </div>
                <p class="text-[18px] pt-4 px-3">${product.description}</p>
            </div>`
    }).join("")}`

}

export default category