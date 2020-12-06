import * as HttpService from '../httpService';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());

describe('httpService', () => {
  it('getItemFromGitHub get 200 status', async () => {
    // given'
    fetch.mockImplementationOnce(() => Promise.resolve({status: 200, json: () => [{item: 'test'}]}));
    // when
    const result = await HttpService.getItemFromGitHub(1);
    // then
    expect(result).toStrictEqual([{item: 'test'}]);
  });

  it('getItemFromGitHub get 400 status', async () => {
    // given'
    fetch.mockImplementationOnce(() => Promise.resolve({status: 400, json: () => {msg: 'there are some errors return'}}));
    // when
    const result = await HttpService.getItemFromGitHub(1);
    // then
    expect(result).toStrictEqual([]);
  });
});
