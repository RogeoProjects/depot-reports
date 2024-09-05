const { AgCharts } = agCharts;

const numFormatter = new Intl.NumberFormat("en-US");

const options = {
  container: document.getElementById("myChart"),
  title: {
    text: "DEPOT REPORT",
  },
  subtitle: {
    text: "August",
  },
  footnote: {
    text: "INCOMES TOTAL: €21.200 ",
  },
  series: [
    {
      data: getData(),
      type: "pie",
      calloutLabelKey: "ingredient",
      sectorLabelKey: "weight",
      angleKey: "weight",
      calloutLabel: {
        offset: 10,
      },
      sectorLabel: {
        formatter: ({ datum, sectorLabelKey = "weight" }) => {
          return `${numFormatter.format(datum[sectorLabelKey])}€`;
        },
      },
      tooltip: {
        renderer: ({ datum, angleKey, calloutLabelKey = "ingredient" }) => ({
          title: `${datum[calloutLabelKey]}`,
          content: `${datum[angleKey]}€`,
        }),
      },
      title: {
        text: "",
      },
    },
  ],
  legend: {
    enabled: false,
  },
};
AgCharts.create(options);
