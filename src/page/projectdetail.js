import axios from "axios";
import { useEffect } from "../../lib"


const projectdetail = ({ id }) => {
    useEffect(() => {


        axios.get(`http://localhost:3000/project/${id}`).then(({ data }) => setproject(data))


    })
    return ` <div class="w-full bg-[#EDF7FA] mt-8">

        <div id="productPosts" class="  mx-auto  max-w-7xl px-5 py-4 justify-center flex">
           ${project.map((project) => {
        return ` <div class=" bg-[#FFFFFF] spmace-x-2 t-2 mb-8 p-3 w-[600px] ">
                <h2 class="font-bold text-[26px] px-4">${project.title}</h2>
                <div class="mt-4 px-3 ">
                    <span class="text[18px]">${project.date}</span>
                    <span class="px-2">|</span>
                    <span class="text-[18px]">Figma, Icon Design</span>
                </div>
                <p class="text-[16px] pt-4 px-3">${project.description}</p>
                <img src="${project.gallery}" alt="" width="100%">
            </div>
`
    })}
        </div>
    </div>`

}

export default projectdetail