import { isSameDay, subDays } from "date-fns";

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
  }
  return labels;
}
