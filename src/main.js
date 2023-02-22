import { router, render } from "../lib";

import adminproductPage from "./page/addmin/product";
import AddProduct from "./page/addmin/AddProduct";

import blog from "./page/blog";
import contact from "./page/contact";
import Homepage from "./page/home";
import editProduct from "./page/addmin/editProduct";
import projectdetail from "./page/projectdetail";


const app = document.querySelector("#app");


router.on("/", () => render(Homepage, app));

router.on("/contact", () => render(contact, app));
router.on("/blog", () => render(blog, app));

router.on("/Admin/project", () => render(adminproductPage, app));
router.on("/Admin/project/add", () => render(AddProduct, app));
router.on("/Admin/project/:id/edit", ({ data }) => render(() => editProduct(data), app));



router.on("/project/:id", ({ data }) => render(() => projectdetail(data), app));
router.resolve();