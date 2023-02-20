
import axios from "axios";
import { useEffect, useState } from "../../lib";
import nav from "./nav";

const Harder = () => {
    const [user, setuesr] = useState([]);
    useEffect(() => {
        axios.get("https://3o433y-8080.preview.csb.app/api/user").then(({ data }) => setuesr(data));

    }, []);

    return `   <div> <div class="max-w-7xl mx-auto px-5 mt-9">
        <div class="flex justify-end">
            <button id="button" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-justify"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
   <div>  ${nav()}</div>
     
       ${user.map((user) => {
        return ` <div id="user" class=" grid md:grid-cols-2 md:gap-8 justify-between my-7 ">
            <div class=" space-y-4 order-2 md:order-1">
                <h2 class="font-bold text-3xl">
                    ${user.name}
                </h2>
                <p class="text[18px] ">
                   ${user.description}
                </p>
                
                <span class="bg-[#FF6464] p-4 rounded-full  inline-block"><a href="https://drive.google.com/file/d/1xfBY_Tmlvh7nRRRe4zcqK8h1gD3rHHlj/view" target="_blank">Download Resume</a></span>
            </div>
            <div class="justify-end order-1 md:order-2  ">
                <img src="${user.image}"
                    alt="" class="rounded-full w-[300px] h-[300px] md:ml-auto mx-auto md:mr-0">
            </div>
        </div>`
    })}
    </div>`;
}

export default Harder