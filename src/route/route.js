import { convertDataToParentChildern } from '../service/convertorService';
import { getItemFromGitHub } from '../service/httpService';
import Joi from 'joi';

export const ex1Route = {
  method: 'POST',
  path: '/ex1',
  handler: (request, h) => {
    const result = convertDataToParentChildern(request.payload);
    return h.response(result).code(200);
  },
  options: {
    description: 're-organized json into the correct parent',
    tags: ['api'],
    validate: {
      payload: Joi.object(),
    },
  },
};

export const ex2Route = {
  method: 'GET',
  path: '/ex2',
  handler: async (request, h) => {
    const result = await getItemFromGitHub(request.query?.pageNumber);
    return h.view('ex2', {data: result.items});
  },
  options: {
    description: 'receive data from Github and display as a HTML format',
    tags: ['api'],
    validate: {
      query: Joi.object({
        pageNumber: Joi.number().default(1)
      })
    },
  },
};
