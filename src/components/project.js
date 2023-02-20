
import { useEffect, useState } from "../../lib";
const product = () => {

  const [project, setproject] = useState([]);
  useEffect(() => {
    fetch("https://3o433y-8080.preview.csb.app/api/project").then(res => res.json()).then(project => setproject(project));

  }, []);

  return `</div>
        </div>
         <div class=" mx-auto mb-8 px-5 ">
                  <div class="justify-center font-bold  flex mt-8 ">
            <h2 class="md:text-left text-center text-5xl">Project</h2>
        </div>
        <div id="productWorks" class="grid grid-cols-3 gap-8 mt-8 md:max-w-7xl mx-auto " >
          ${project.map((project) => {

    return `  <div class=" mb-2 hover:drop-shadow-2xl bg-blue-100 ">
                  <div class="">
                    <img src="${project.gallery}" class="w-[100%] h-[300px]" alt="">
                  </div>
                 <div class="mx-4">
                  <a>  <h3 class="font-bold text-[30px] ">${project.title}</h3></a>
                    <div class="my-3">
                        <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${project.projectdate}</span>
                        <span class="text-[#8695A4] pl-2">Dashboard</span>
                    </div>
                    <p class="text-[18px] pb-2">${project.description}</p>
                    
                   </div>
                <div >
                    <a href="project/${project.id}"><button class="w-full bg-red-400">view</button></a>
                </div>
              
            </div>
         `
  }).join("")}
          
 </div>

</div>`

}

export default product