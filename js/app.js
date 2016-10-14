console.log('wired up!')
console.log($)
// https://congress.api.sunlightfoundation.com/legislators?apikey=ea71fbe43def436ab78408444b414952

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}
var placeTofind = document.querySelector('.container')
console.log(placeTofind)

var putDataOnPage = function(returnedData){
   console.log(returnedData)


   forEach( returnedData.results, function(legislatorObj){
      // console.log(movieObj.Title, movieObj.Year, movieObj.Poster)
      var bigStr =     '<div class="col-sm-6 col-md-4">'
        bigStr +=       '<div class="thumbnail">'
        bigStr +=       '<div class="caption">'
        bigStr +=         '<h3>' + legislatorObj.first_name + ' ' + legislatorObj.last_name + '</h3>'
        bigStr +=           '<h4>' + legislatorObj.chamber + ' -- ' + legislatorObj.party + '-' + legislatorObj.state_name  + '</h4>'
        bigStr +=           '<ul>' + '<li>' + 'email: ' + legislatorObj.oc_email + '</li>' + '<li>' + 'website: ' + legislatorObj.website + '</li>'+ '<li>' + 'favebook: ' + legislatorObj.facebook_id + '</li>' + '<li>' + 'twitter: ' + legislatorObj.twitter_id + '</li>' + '</ul>'
        bigStr +=          '<h6>'+ '<strong>' + 'Term_End' + ' ' + legislatorObj.term_end + '</strong>' +'</h6>'
        bigStr +=         '</div>'
        bigStr +=       '</div>'
        bigStr +=     '</div>'

      placeTofind.innerHTML += bigStr
      // console.log('---------------')
   })

}





$.getJSON('https:congress.api.sunlightfoundation.com/legislators?apikey=ea71fbe43def436ab78408444b414952').then(putDataOnPage)
