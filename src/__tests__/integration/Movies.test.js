import frisby from 'frisby';

it('should return status 200 and count equals to 7', async () => {
  return await frisby
    .get(`https://swapi.co/api/films/`)
    .expect('status', 200)
    .expect('json', 'count', 7)
})