"use strict";

import { Request, Response } from "express";
import movieList from "../model/movies";

export const retrieveAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await movieList.find();
    res.status(200).send(result);
  } catch (e) {
    console.log(`There has been an error with retrieveAllMovies:`, e);
    res.status(500).send(`Internal Server Error`);
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
  } catch (e) {
    console.log(`There has been an error with addMovie:`, e);
    res.status(500).send(`Internal Server Error`);
  }
};

export const removeMovie = async (req: Request, res: Response) => {
  try {
    const { imdbId } = req.body.params;
    const result = await movieList.deleteOne({ imdbId: imdbId });
  } catch (e) {
    console.log(`There has been an error with removeMovie:`, e);
    res.status(500).send(`Internal Server Error`);
  }
};
