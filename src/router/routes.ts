import { Router} from "express"
import path from "path"
const route = Router()

route.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, "../../","public", "index.html"))
})

export default route;