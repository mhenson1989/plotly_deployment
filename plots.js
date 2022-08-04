function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  }
//   // 1. Create the buildCharts function.
// function buildCharts(sample) {
//   // 2. Use d3.json to load and retrieve the samples.json file 
//   d3.json("samples.json").then((data) => {
//     console.log(data);

//     // 3. Create a variable that holds the samples array. 
//     var samplesArray = data.samples;

//     // 4. Create a variable that filters the samples for the object with the desired sample number.
//     var firstArray = samplesArray.filter(data => data.id == sample);
//     console.log(firstArray);
 
//     //  5. Create a variable that holds the first sample in the array.
//     var result = firstArray[0];
//     console.log(result);

//     // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
//     var otuIds = result.otu_ids;
//     var otuLabels = result.otu_labels;
//     var sampleValues = result.sample_values;

//     console.log(otuIds);
//     console.log(otuLabels);
//     console.log(sampleValues);

//     // 7. Create the yticks for the bar chart.
//     // Hint: Get the the top 10 otu_ids and map them in descending order  
//     //  so the otu_ids with the most bacteria are last. 

//     var yticks = otuIds.slice(0,10).map(id => '${otuID}' + id).reverse();

//     // 8. Create the trace for the bar chart. 
//     var barData = [
//       {
//         x: sampleValues.slice(0,10).reverse(),
//         text: otuLabels.slice(0,10).reverse(),
//         type: 'bar'
//       }];

//     // 9. Create the layout for the bar chart. 
//     var barLayout = {
//       title: "Top 10 Bacteria Cultures Found",
//       yaxis: {
//         tickmode: "array",
//         tickvals: [0,1,2,3,4,5,6,7,8,9],
//         ticktext: yticks
//       },

//     // 10. Use Plotly to plot the data with the layout.

//     Plotly.newPlot("bar", barData, barLayout, {responsive: true})};

// // Bar and Bubble charts
//     // 1. Create the trace for the bubble chart.
//     var bubbleData = [{
//       x: otuIds,
//       y: sampleValues,
//       text: otuLabels,
//       mode: 'markers',
//       marker: {
//         size: sampleValues,
//         color: otuIds,
//         colorscale: "Earth"
//       }
//     }];

//     // 2. Create the layout for the bubble chart.
//     var bubbleLayout = {
//       title: "Bacteria Cultures Per Sample",
//       showlegend: false,
//       xaxis: {title: "OTU Id", automargin: true},
//       yaxis: {automargin: true},
//       hovermode: "closest"
//     };

//     // 3. Use Plotly to plot the data with the layout.
//     Plotly.newPlot("bubble", bubbleData, bubbleLayout, {responsive: true}); 
//   });
// }

// // Deliverable 3 - Guage Chart

//     // 1. Create a variable that filters the metadata array for the object with the desired sample number.
//     var metadataArray = data.metadata.filter(data => data.id == sample);

//     // 2. Create a variable that holds the first sample in the metadata array.
//     // 3. Create a variable that holds the washing frequency.

//     var washFreq = +metadataArray[0].wFreq;
    
//     // 4. Create the trace for the gauge chart.
//     var gaugeData = [
//       {
//         domain: { x: [0,1], y: [0,1] },
//         value: washFreq,
//         title: { text: "<b>Belly Button Wash Frequency</b><br>Scrubs per week"},
//         type: "indicator",
//         mode: "guage+number",
//         gauge: {
//           axis: {
//             range: [null, 10],
//             tickmode: "array",
//             tickvals: [0,2,4,6,8,10],
//             ticktext: [0,2,4,6,8,10]
//           },
//           bar: {color: "black"},
//           steps: [
//             { range: [0,2], color: "red"},
//             { range: [2,4], color: "orange"},
//             { range: [4,6], color: "yellow"},
//             { range: [6,8], color: "green"},
//             { range: [8,10], color: "blue"}]
//         }
//       }
//     ];
    
//     // 5. Create the layout for the gauge chart.
//     var gaugeLayout = {
//       autosize: true,
//       annotations: [{
//         xref: 'paper',
//         yref: 'paper',
//         x: 0.5,
//         xanchor: 'center',
//         y: 0,
//         yanchor: 'center',
//         text: "Guage displays belly button wash frequency",
//         showarrow: false
//       }] 
//     };

//     // 6. Use Plotly to plot the gauge data and layout.
//     Plotly.newPlot("guage", gaugeData, gaugeLayout, {responsive: true});



