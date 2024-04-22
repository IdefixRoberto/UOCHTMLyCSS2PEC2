const ctx = document.getElementById('demografiaChart').getContext('2d');
const demografiaChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'ANY 1900', 'ANY 1920', 'ANY 1940', 'ANY 1960',
      'ANY 1970', 'ANY 1981', 'ANY 1991', 'ANY 2000',
      'ANY 2005', 'ANY 2007', 'ANY 2016'
    ],
    datasets: [{
      label: 'Habitants',
      data: [1949, 2082, 1954, 1350, 1107, 900, 726, 578, 622, 672, 582],
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Incluir una marca de graduación cada 500 unidades
          stepSize: 500
        }
      }
    }
  }
});