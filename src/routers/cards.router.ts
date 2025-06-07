import express, { Request, Response } from 'express';
import { Card, CreateCardRequest, GetCardsResponse } from '../types/cards';
import { IdParams } from '../types/common';

export const cardsRouter = express.Router();

cardsRouter.get(
  '/',
  (request: Request<{}, {}>, response: Response<GetCardsResponse>) => {
    // TODO: return tasks
  },
);

cardsRouter.get(
  '/:id',
  (request: Request<IdParams, {}>, response: Response<Card>) => {
    // TODO: return task
  },
);

cardsRouter.post(
  '/',
  (request: Request<{}, CreateCardRequest>, response: Response<Card>) => {
    // TODO: create card
  },
);

cardsRouter.put(
  '/:id',
  (request: Request<IdParams, Card>, response: Response<Card>) => {
    // TODO: update card
  },
);

cardsRouter.delete(
  '/:id',
  (request: Request<IdParams>, response: Response<void>) => {
    // TODO: delete card
  },
);
