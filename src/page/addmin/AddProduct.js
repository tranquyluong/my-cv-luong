import axios from "axios";
import { useEffect, router } from "../../../lib"
import header from "../../components/admin/header";

const AddProduct = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projecttitle = document.querySelector("#project-title");
        const projectdescription = document.querySelector("#project-description");
        const image = document.querySelector("#image-add");
        const projectdate = document.querySelector("#project-date");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await uploadfiles(image.files);
            const newProject = {
                title: projecttitle.value,
                description: projectdescription.value,
                image: image.value,
                gallery: urls,
                projectdate: projectdate.value
            };
            axios.post("https://lqm2cu-8080.preview.csb.app/api/project", newProject).then(() => {
                router.navigate("/Admin/project");
            })
        });
    });
    const uploadfiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dndyxqosg";
            const PRESET_NAME = "upload-my-cv";
            const FOLDER_NAME = "Upload-my-cv";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

            const formdata = new FormData();
            formdata.append("upload_preset", PRESET_NAME);
            formdata.append("folder", FOLDER_NAME);
            for (const file of files) {
                formdata.append('file', file);
                const response = await axios.post(api, formdata, {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                });
                urls.push(response.data.secure_url);


            }
            return urls;
        }

    };
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
                    <form id="form-add">
                        <div>
                            <label for="">Tên Project</label>
                            <input id="project-title" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                       
                        <div>
                            <label for="">Image</label>
                            <input type="file" id="image-add" multiple class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects">
                        </div>
                        <div>
                            <label for="">Năm </label>
                            <input id="project-date" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                           <label for="">Description</label>
                           <textarea id="project-description" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4" name="" id=""
                            cols="30" rows="7" placeholder="description"></textarea>

                           <div>
                             <button class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập
                           lại</button>
                        <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                            href="./project-list.html">Danh sách</a>
                        <button 
                            class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Thêm
                        </button>
                           </div>
                    </form>
                   
                </section>
            </div>
        </div>
    </div>`

}

export default AddProduct