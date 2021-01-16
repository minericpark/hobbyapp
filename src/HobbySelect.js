import React, {useState} from 'react';

function HobbySelect(data) {

  //sample data
  let dataset = [
    [1, 1, 3], [0, 1, 5], [1, 0, 1],
    [10, 10, 0], [10, 13, 4], [13, 13, 2],
    [54, 54, 1], [55, 55, 2], [0, 2, 1], [1, 1, 5]
  ];
  
  let clustering = require('density-clustering');
  let kmeans = new clustering.KMEANS();
  // parameters: 3 - number of clusters
  let clusters = kmeans.run(dataset, 3);
  let centroid = getCentroid(clusters, dataset);
  console.log(getCentroid(clusters, dataset))
 

  const [hobby, setHobby]=useState(getHobby(centroid))
  //console.log(hobby)
  
  return( <h1>{hobby}</h1>);
}

function getCentroid(clusters, data) {
  let max = 0;
  let largestCluster = 0;

  for (let i = 0; i < clusters.length; i++) {


    if (clusters[i].length > max) {
      max = clusters[i].length;
      largestCluster = clusters[i];
    }
  }

  let dim = data[0].length;
  let res = [];
  let pointIndex = largestCluster[0] === 0 ? 0 : largestCluster[0] - 1;


  console.log(max)
  for (let i = 0; i < dim; i++) {
    res[i] = 0
    for (let j = pointIndex; j < max + pointIndex; j++) {
      res[i] += data[j][i];
    }
    res[i] /= largestCluster.length;
  }
  return res;
}


function isEqual(a1, a2) {
  if (a1.length == a2.length) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] == a2[i]) {
        continue;
      }
      return false;
    }
    return true;
  }
  return false;
}
function getHobby(centroid) {
  let traits = []
  for (let i = 0; i < centroid.length; i++) {
    traits[i] = centroid[i] > 2.5 ? 1 : 0;
  }
  let hobby = ''
  if (isEqual(traits, [1, 1, 0])) {
    return 'Piano'
  }

  else if (isEqual(traits, [1, 1, 1])) {
    return 'Programming'
  }
  else if (isEqual(traits, [1, 0, 1])) {
    return 'Golf'
  }
  else if (isEqual(traits, [1, 0, 0])) {
    return 'Reading'
  }
  else if (isEqual(traits, [0, 1, 0])) {
    return 'Cooking'
  }
  else if (isEqual(traits, [0, 1, 1])) {
    return 'Dancing'
  }
  else if (isEqual(traits, [0, 0, 0])) {
    return 'Yoga'
  }

}




export default HobbySelect;