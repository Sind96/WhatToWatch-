"use strict";

import mongoose, { Schema, Document, Model } from "mongoose";

interface IMovie extends Document {
  imdbId: string;
  title: string;
  imageURL: string;
}

const movieSchema: Schema = new Schema({
  imdbId: { type: String, required: true },
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
});

const movieList: Model<IMovie> = mongoose.model<IMovie>(
  "favouriteMovieList",
  movieSchema
);

export default movieList;
