const schedules = [
    {
      lat: 1,
      lng: 5,
    },
    {
      lat: 3,
      lng: 7,
    },
    {
      lat: 4,
      lng: 9,
    },
    {
      lat: 5,
      lng: 10,
    },
  ];
  
  const startPoint = {
    lat: 4,
    lng: 7,
  };

  //Complete this function below which it will be return a schedule list with the closest distance to the furthest distance
  //Distance is being calculated by |lat1 - lat2| + |lng1 - lng2|
  const getOptimisedRoutes = () => {

    let a;
    let b;
    let c;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < schedules.length; i++) {
        a = Math.abs(startPoint.lat - schedules[i].lat) + Math.abs(startPoint.lng - schedules[i].lng);
        if(max < a){
            max = a;
            b = schedules[i];
        }
        if(min > a){
            min = a;
            c = schedules[i]
        }
    }
    
    /*
    console.log('The furthest distance ' + max); 
    console.log('Schedule: {' + b.lat + ',' + b.lng + '}');
    console.log('The closest distance ' + min);
    console.log('Schedule: {' + c.lat + ',' + c.lng + '}');
    */

    const result = {
        closest:{min, c}, furthest:{max, b}
    };

    return result;

  };

  const routes = getOptimisedRoutes();
  
  document.getElementById('demo').innerHTML = `
  The closest distance: ${routes.closest.min} <br>
  Schedule: { ${routes.closest.c.lat}, ${routes.closest.c.lng} }<br><br>
  The furthest distance: ${routes.furthest.max} <br>
  Schedule: { ${routes.furthest.b.lat}, ${routes.furthest.b.lng} }`;
  
