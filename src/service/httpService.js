import fetch from 'node-fetch';

export const getItemFromGitHub = async (pageNumber) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=nodejs&per_page=10&page=${pageNumber}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = response.status == 200? response.json(): [];
    return result;
};
