import axios from "axios"
import { useEffect, useState } from "../../lib"
import nav from "../components/nav"

const contact = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const description = document.querySelector("#description");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newcontact = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                description: description.value
            };
            axios.post("https://3o433y-8080.preview.csb.app/api/contacts", newcontact);
            alert("Gửi thành công ")
        });
    })
    return `    <div class="mx-auto  width-[1240px]  ">
        <div class="justify-between flex py-12 px-8">
            <div class="flex space-x-4 ">
                <a href="" class="font-bold text-[25px] tracking-wide">Trần Quý Lương </a>
                <a href="" class="text-[18px] tracking-wide"> / Frontend developer</a>
            </div>
            <div>
                ${nav()}
            </div>
        </div>
        <div class="justify-center bg-slate-200 flex py-16">
            <h2 class="font-bold text-[30px]">contact</h2>
        </div>

        <div class=" py-12 px-8 space-x-4 grid grid-cols-[400px,auto]">
            <div class="space-y-4  ">
                <div class="flex space-x-4">
                    <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div>
                        <a href="" class="font-bold text-[16px]">address</a>

                        <a class="text-[16px]">136/51 Cầu diễn / Bắc từ Liêm/Hà nội </a>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div>
                        <a href="" class="font-bold text-[16px]">Phone</a>
                        <a class="text-[16px]">0325932836</a>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <div>
                        <a href="" class="font-bold text-[16px]">Email</a>
                        <a href="" class="text-[16px]">tranquyluong1234@gmail.com</a>
                    </div>
                </div>

            </div>
            <form id="form-add">
                <div class="flex gap-4">
                    <input type="text" placeholder="Name" id="name" 
                        class="border-2 border-zinc-100 w-200 w-full py-4 px-3 outline-none">
                    <input type="text" placeholder="Email" id="email" 
                        class="border-2 border-zinc-100 w-200 w-full py-4 px-3 outline-none">

                </div>
                <div class="flex gap-4">
                    <input type="text" placeholder="Phone" id="phone"
                        class="border-2 border-zinc-100 w-200 w-full py-4 px-3 outline-none">
                    <input type="text" placeholder="sbject" id="sbject"
                        class="border-2 border-zinc-100 w-200 w-full py-4 px-3 outline-none">

                </div>
                <div>

                    <textarea name="" placeholder="Message" cols="30" rows="10" id="description"
                        class="border-2 border-zinc-100 w-200 w-full py-4 px-3 outline-none"></textarea>
                </div>
                <div>
                    <button class="w-full bg-red-500 text-white">Send Message</button>
                </div>
            </form>
        </div> `


}
export default contact