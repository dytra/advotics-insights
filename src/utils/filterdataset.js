import { isSameDay, subDays, eachDayOfInterval } from "date-fns";
import { format } from "date-fns/esm";
export const filterDataset = ({ dataset, filterMode, option }) => {
  if (filterMode === 'TODAY') {
    const filtered = dataset.filter(item => {
      return isSameDay(new Date(item.date), new Date());
    });
    const reduced = reduceDataset(filtered);

    return [reduced];

  } else if (filterMode === 'YESTERDAY') {
    const filtered = dataset.filter(item => {
      return isSameDay(new Date(item.date), subDays(new Date(), 1));
    });
    const reduced = reduceDataset(filtered);
    return [reduced];

  } else if (filterMode === 'LAST_7_DAYS') {
    /* filter for 7 days */
    const filtered = dataset.filter(item => {
      return new Date(item.date) < new Date() && new Date(item.date) > subDays(new Date(),7);
    });
    const sorted = filtered.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    return sorted;

  }
}

const reduceDataset = (dataset) => {
  const reduced = dataset.reduce((cur, next) => {
    return {
      date: cur.date,
      gross: cur.gross + next.gross,
      nett: cur.nett + next.nett,
      apv: cur.apv + next.apv,
      lpt: cur.lpt + next.lpt
    }
  });
  return reduced;

}


export const getDatasetLabels = (filterMode) => {
  let labels;
  if (filterMode === 'TODAY') {
    labels = ["Today"]
  } else if (filterMode === 'YESTERDAY') {
    labels = ["Yesterday"]
  } else if (filterMode === "LAST_7_DAYS") {
    labels = eachDayOfInterval({
      start: subDays(new Date(), 7),
      end: subDays(new Date(), 1),
    })
    .map(date => format(date, 'dd-MMM-yyyy'));

  }
  return labels;
}
