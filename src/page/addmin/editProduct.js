import axios from "axios";
import { useEffect, router, useState } from "../../../lib"
import header from "../../components/admin/header";


const editProduct = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get("https://2b2erc-8080.preview.csb.app/api/project/" + id).then(({ data }) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const projecttitle = document.querySelector("#project-title");
        const projectdate = document.querySelector("#project-date");
        const projectdescription = document.querySelector("#project-description");
        const image = document.querySelector("#image-add");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newProject = {
                title: projecttitle.value,
                date: projectdate.value,
                description: projectdescription.value,
                image: image.value,
            };
            axios.put(`https://2b2erc-8080.preview.csb.app/api/project/" + id`, newProject).then(() => {
                router.navigate("/Admin/project");
            })

        });
    });
    return ` 
    ${header()}
                <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Add Projects</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    <form id="form-edit">
                        <div>
                            <label for="">Tên Project</label>
                            <input id="project-title" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects" value="${project.title}">
                        </div>
                       
                        <div>
                            <label for="">Image</label>
                            <input type="file" id="image-add" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects" value="${project.image}"> <div>
                            <label for="">Năm </label>
                            <input id="project-date" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Năm" value="${project.date}">
                        </div>
                        </div>
                             <label for="">Description</label>
                           <textarea id="project-description" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4" name="" id=""
                            cols="30" rows="7" placeholder="description">${project.description}</textarea>
                           <div>
                            <a href="admin/project/${project.id}/edit" class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập lại</a>
                        <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                            href="./project-list.html">Danh sách</a>
                        <button 
                            class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu
                        </button>
                           </div>
                    </form>
                   
                </section>
            </div>
        </div>
    </div>`

}

export default editProduct