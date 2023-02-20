import { useEffect, useState } from "../../lib"
import nav from "../components/nav"


const blog = () => {
    const [blogs, setblog] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/blogs").then(res => res.json())
            .then(data => setblog(data))
    }, [])
    return `    <!-- CONTAINER -->
    <div class="">
        <!----------------------------------------------------------------- HEADER -->
        <header class=" ">
            <div class="header flex justify-between px-10 py-12">
                <div class="uppercase">
                    <a class=" text-[25px] tracking-wide font-bold" href="">Trần Quý lương</a>
                    <a class=" text-[18px] tracking-wide" href="">/ Frontend developer</a>
                </div>
                <div>
                <ul class="flex font-bold   ">
                   ${nav()}
                </ul>
                </div>
            </div>
        </header>

        <!----------------------------------------------------------------- content -->
        <div class=" ">
            <!-- Title -->
            <section class=" text-center bg-slate-300">
                <h1 class=" font-black text-[32px] pt-20 pb-8">Blog</h1>
                <p class="pb-8">What i offer</p>
            </section>
            <!-- project name 1 -->
            <section class="w-[850px] mx-auto mb-[80px] mt-20">
                <div class="rows grid grid-cols-3 gap-6">
                  ${blogs.map((blog) => {
        return `  <div class="col bg-slate-50 shadow  space-y-4  px-6">
                            <div><h1 class="font-bold text-[23px]"> ${blog.title} <br></h1> <a class="text-blue-500 font-medium"
                            href="${blog.url}" target="_blank">ViewMore </a></div>
                            <div ><img src="${blog.image}" class="h-[200px] w-[100%]" alt="" ></div>
                    </div>`
    }).join("")}
                   

                </div>
            </section>

        </div>

        <!---------------------------------------------------------------- FOOTER -->
        <footer class="">
            <div class=" flex justify-between items-center px-10 py-12 ">
                <div>© 2035 by Maya Nelson.
                    Powered and secured by Wix</div>
                <div class="flex">
                    <div class="pl-6 pr-6 text-center">
                        <p class="font-bold">Call</p> <br>

                        0325932836
                    </div>
                    <div class=" pr-6 text-center">
                        <p class="font-bold">Write</p> <br>

                       luongtqph20440@fpt.edu.vn
                    </div>
                    <div class="pr-6 text-center">
                        <p class="font-bold">Follow</p>
                        <ul class="flex justify-center mt-5">
                            <li><a class=" pr-5 " href="https://www.facebook.com/minhngoc22052k3/"><i
                                        class="fa-brands fa-facebook"></i></a></li>
                            <li><a class="pr-5" href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a class=" pr-5 " href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a class="pr-5 " href=""><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>`

}

export default blog