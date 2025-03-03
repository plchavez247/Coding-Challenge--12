//Task 1: Business Dashboard
const dashboard = document.getElementById(`dashboard`);
const dashboardSelector = document.querySelector(`#dashboard`);//selecting the dashboard container
const RevnueCard = document.createElement(`div`); //Creating a new <div> element
RevnueCard.setAttribute("class", "metric-card");//assigning class, metric card
RevnueCard.setAttribute("id", "revenueCard");//id, revenueCard
RevnueCard.textContent = "Revenue: $0"//using textContent to Populate the Card
dashboard.appendChild(RevnueCard);//Append the new metric card to the dashboard using appendchild

//Task 2