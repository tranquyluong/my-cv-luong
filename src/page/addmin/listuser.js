import { useEffect, useState } from "../../../lib"
import axios from "axios";
const listuer = () => {

    const [user, setuser] = useState([]);
    useEffect(() => {

        axios.get("https://e2mhpd-8080.preview.csb.app/api/user").then(({ data }) => setuser(data))
    }, [])
    // useEffect(() => {
    //     const btns = document.querySelectorAll(".btn-remove");
    //     for (let btn of btns) {
    //         btn.addEventListener("click", function (e) {
    //             e.preventDefault();
    //             const id = this.dataset.id;
    //             axios.delete(`hhttps://lqm2cu-8080.preview.csb.app/api/user/${id}`).then(() => {
    //                 const newProject = project.filter((project) => project.id !== +id);
    //                 setproject(newProject);
    //             })

    //         })
    //     }
    // });
    return ` <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption
                class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
               list name
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products
                    designed to help you work and play, stay organized, get answers, keep in touch, grow your business,
                    and
                    more.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                         name
                    </th>

                    <th scope="col" class="px-6 py-3">
                        description
                    </th>
                    <th>date</th>
                    <th>img </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
             ${user.map((user) => {
        return `   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <td class="px-6 py-4">
                        ${user.name}
                    </td>
                     <td class="px-6 py-4">
                      ${user.date}
                    </td>
                    <td class="px-6 py-4">
                      ${user.description}
                    </td>
                     <td class="px-6 py-4">
                      <img src="${user.image}" alt="">
                      
                    </td>
                   
                    <td width="150">
               
                      <a class="bg-green-500 px-2 py-1 btn-remove rounded-md text-white hover:bg-green-600 deley-100" data-id="${user.id}">xóa</a> ||      
                      <a class="bg-green-500 px-2 py-1 rounded-md text-white hover:bg-green-600 deley-100" href="/Admin/project/${user.id}/edit">Sửa</a>
                     </td>
                 </tr>` }).join("")}

            </tbody>
        </table>
    </div>`
}

export default listuer