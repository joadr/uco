Template.index.helpers({
  domains: function(){
    return Domains.find().fetch();
  }
});
