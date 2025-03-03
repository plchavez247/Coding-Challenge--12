//Task 1: Business Dashboard
const dashboard = document.getElementById(`dashboard`);
const dashboardSelector = document.querySelector(`#dashboard`);//selecting the dashboard container
const revenueCard = document.createElement(`div`); //Creating a new <div> element
revenueCard.setAttribute("class", "metric-card");//assigning class, metric card
revenueCard.setAttribute("id", "revenueCard");//id, revenueCard
revenueCard.textContent = "Revenue: $0"//using textContent to Populate the Card
dashboard.appendChild(revenueCard);//Append the new metric card to the dashboard using appendchild

//Task 2: Updating Dashboard Metrics- Working with NodeLists and Arrays
const  metricCardList = document.querySelectorAll(".metric-card");// selecting all elements with the metric card class
const metricCardArray = Array.from(metricCardList);//Array craeted using Nodelist
metricCardArray.forEach(card =>{
    card.textContent += " - Updated";//updating inner test
    card.setAttribute("style", "background-color: lightblue;");//modifying style
});