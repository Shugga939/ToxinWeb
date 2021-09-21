export const initChartPie = function (){
  const ratingCanavas = document.getElementById('rating');
  if (ratingCanavas) {
  const gradientOrange = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);
  const gradientPurple = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);
  const gradientGreen = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);

  gradientOrange.addColorStop(0, '#FFE39C');
  gradientOrange.addColorStop(1, '#FFBA9C ');

  gradientPurple.addColorStop(0, '#BC9CFF');
  gradientPurple.addColorStop(1, '#8BA4F9');

  gradientGreen.addColorStop(0, ' #6FCF99');
  gradientGreen.addColorStop(1, '#6BD0BE');
    
  const ratingData = {
    labels: [
      ' Великолепно',
      ' Хорошо',
      ' Удовлетворительно',
      ' Разочарован'
    ],
    datasets: [
      {
        data: [130, 65, 65, 0],
        backgroundColor : [gradientOrange, gradientPurple, gradientGreen],
        borderWidth: 2
      }
    ]
  }
  const ratingOption = {
    rotation: 180,
    cutout: 55,
    
    plugins: {
      legend: {
        display: false,
      }
    },
    maintainAspectRatio: false,
    cutoutPercentage: 90,
  }
    new Chart (ratingCanavas, {
    type: 'doughnut',
    data: ratingData,
    options: ratingOption
    })
  }
}