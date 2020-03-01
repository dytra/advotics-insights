const dataset2chart = (dataset, fields ) => {
  const chartDataset = fields.map(field => {
    const chartDataObj = {
      label: field.label,
      backgroundColor: field.backgroundColor,
      data: dataset.map(item => item[field.label])
    };
    return chartDataObj;
  });
  return chartDataset;
};

export default dataset2chart;
