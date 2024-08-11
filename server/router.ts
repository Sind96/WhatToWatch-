"use strict";

import { Router } from "express";
import { retrieveAllMovies, addMovie, removeMovie } from "./controllers/movies";

const router: Router = Router();

router.get("/movies", retrieveAllMovies);

router.post("/movies", addMovie);

router.delete("/movies/:id", removeMovie);

export default router;
