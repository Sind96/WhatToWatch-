"use strict";

import { Router } from "express";
import { retrieveAllMovies, addMovie, removeMovie } from "./controllers/movies";

const router: Router = Router();

router.get("/", retrieveAllMovies);

router.post("/", addMovie);

router.delete("/", removeMovie);

export default router;
