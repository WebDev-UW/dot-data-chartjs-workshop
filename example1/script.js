const ctx = document.getElementById("my-chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes (2021)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
	  {
        label: "# of Votes (2022)",
        data: [6, 5, 9, 23, 15, 3],
        borderWidth: 1,
      },
    ],
  },
});