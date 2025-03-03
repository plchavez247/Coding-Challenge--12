//Task 1: Business Dashboard
const dashboard = document.getElementById(`dashboard`);
const dashboardSelector = document.querySelector(`#dashboard`);//selecting the dashboard container
const metricCard = document.createElement(`div`); //Creating a new <div> element
metricCard.setAttribute("class", "metric-card");//assigning class, metric card
metricCard.setAttribute("id", "revenueCard");//id, revenueCard
metricCard.textContent = "Revenue: $0"//using textContent to Populate the Card
dashboard.appendChild(metricCard);//Append the new metric card to the dashboard using appendchild