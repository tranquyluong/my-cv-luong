import { menus } from "../../data"

const nav = () => {
  return `  

  
            <ul id="menu" class="md:flex md:space-x-4 font-bold text-[20px] flex justify-end hidden ">
                       ${menus.map(menu => `<a href="${menu.link}">${menu.name}</a>`).join("")}
            </ul>

           `
}

export default nav