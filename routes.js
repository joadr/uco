// Router.route('/test', function () {
//   var abcdario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z', 'y'];
//   var dominios = [];
//   abcdario.forEach(function(element, index, array){
//     abcdario.forEach(function(element2, index2, array2){
//       // var dominio = element+element2+'.cl'
//       // var llamado = HTTP.call("GET", "https://www.nic.cl/registry/Whois.do?d="+dominio);
//       // if(llamado.content.indexOf("no existe") != -1){
//       //     Domains.insert({Domain: dominio, letras: 2});
//       //     dominios.push(dominio);
//       //     console.log(dominio);
//       // }
//       abcdario.forEach(function(element3, index3, array3){
//         var dominio = element+element2+element3+'.cl'
//         var llamado = HTTP.call("GET", "https://www.nic.cl/registry/Whois.do?d="+dominio);
//         if(llamado.content.indexOf("no existe") != -1){
//             Domains.insert({Domain: dominio, letras: 3});
//             dominios.push(dominio);
//             console.log(dominio);
//         }
//       });
//     });
//   });
//   console.log(dominios);
// }, {where: 'server'});
//
// Router.route('index', {
//   path: '/'
// });

Router.configure({
    trackPageView: true
});

Router.route('prices', {
  path: '/'
});
