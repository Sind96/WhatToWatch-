"use strict";

import { Request, Response } from "express";
import movieList from "../model/movies";

const handleError = (error: unknown, res: Response) => {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  } else {
    console.log("An unknown error occurred:", error);
    res.status(500).send("An unknown error occurred");
  }
};

export const retrieveAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await movieList.find();
    res.status(200).send(result);
  } catch (e: unknown) {
    handleError(e, res);
  }
};

export const addMovie = async (req: Request, res: Response) => {
  try {
    if (!req.body.imdbId) {
      return res.status(400).send("Missing imdbId");
    } else {
      const result = await movieList.create(req.body);
      res
        .status(200)
        .send({ msg: `The requested movie has been added: ${result}` });
    }
  } catch (e: unknown) {
    handleError(e, res);
  }
};

export const removeMovie = async (req: Request, res: Response) => {
  try {
    const { imdbId } = req.body;
    if (!imdbId) {
      return res.status(400).send("Missing imdbId");
    }
    const result = await movieList.deleteOne({ imdbId });
    res
      .status(200)
      .send({ msg: `Movie with imdbId ${imdbId} removed successfully.` });
  } catch (e: unknown) {
    handleError(e, res);
  }
};
