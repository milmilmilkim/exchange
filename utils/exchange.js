import axios from 'axios';
import cheerio from 'cheerio';

//환율
export const getExchange = async () => {
  const result = {};

  const html = await axios.get('https://www.kita.net/cmmrcInfo/ehgtGnrlzInfo/rltmEhgt.do');
  const $ = cheerio.load(html.data);

  $('tbody tr').map((i, el) => {
    const data = $(el).find('a').text().split(' ')[0];
    const money = $(el).find('td').first().text();

    if (data.trim() && money.trim()) {
      result[data] = money;
    }
  });

  return result;
};
