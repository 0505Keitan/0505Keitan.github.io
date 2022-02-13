// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  fetch('https://scrapbox.io/api/pages/0505Keitan/index')
    .then((r) => r.json())
    .then((data) => res.json(data));
};
