import express from "express"
import { createDonar, deleteDonar, getDonar, getDonars, updateDonar, getDonarEjs, updateDonarLocation } from "../controllers/donar.js";

const router = express.Router();

router.post("/", createDonar);

router.post("/admin/:donarId", updateDonarLocation);

router.put("/:id", updateDonar);

router.delete("/:id", deleteDonar);

router.get("/:id", getDonar);

router.get("/ejs/:id", getDonarEjs);

router.get("/", getDonars);

export default router;
