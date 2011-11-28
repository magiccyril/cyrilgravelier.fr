
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Cyril Gravelier'
  })
};

exports.contact = function(req, res){
  res.render('contact', {
    title: 'Contact - Cyril Gravelier'
  })
};

exports.cv = function(req, res){
  res.render('cv', {
    title: 'CV - Cyril Gravelier'
  })
};

exports.projects = function(req, res){
  res.render('projects', {
    title: 'Projets - Cyril Gravelier'
  })
};