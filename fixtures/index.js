const got = require('got');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');
const uuidv4 = require('uuid/v4');

moment().locale('sv');

const clean = str =>
  str
    ? str
        .toString()
        .replace(/(\r\n|\n|\r)/gm, '')
        .trim()
    : null;

const fetchDetails = async url => {
  try {
    const res = await got(`https://giftinformation.se${url}`);
    const $ = cheerio.load(res.body);

    return {
      description: clean($('.article-bd').html()),
      inCaseOf: {
        ingestion: clean(
          $('#Fortaring')
            .find('.t-rte')
            .html()
        ),
        eyeSplash: clean(
          $('#Ogonstank')
            .find('.t-rte')
            .html()
        ),
        skinContact: clean(
          $('#Hudkontakt')
            .find('.t-rte')
            .html()
        ),
        inhalation: clean(
          $('#Inandning')
            .find('.t-rte')
            .html()
        ),
      },
      url: `https://giftinformation.se${url}`,
      published: moment(
        $('.block-related')
          .find('strong')
          .text(),
        'DD  MMMM  YYYY' // exempel "10  juni  2016"
      ).valueOf(),
    };
  } catch (error) {
    console.error(error);
  }
};

const scrape = async () => {
  try {
    const res = await got('https://giftinformation.se/kemikalieregister');
    const $ = cheerio.load(res.body);

    const chemicals = $('h2.h-list-search-heading')
      .map(async (i, el) => {
        const url = $(el)
          .find('a')
          .attr('href');
        const details = await fetchDetails(url);
        const name = $(el)
          .find('a')
          .text();
        const obj = {
          id: uuidv4(),
          name,
          ...details,
        };

        return new Promise((resolve, reject) => resolve(obj));
      })
      .get();

    const data = await Promise.all(chemicals);

    fs.writeFile('fixtures/data.json', JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log('Complete');
    });
  } catch (error) {
    console.error(error);
  }
};

scrape();
