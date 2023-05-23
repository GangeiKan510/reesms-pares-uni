class PropertyRosterHandler {

  constructor() {
    super();
    this.method = HttpMethodType.GET;
    this.endpoint = '/property';
  }

  handler (req, res) {

    if (req.isAuthenticated()) {
    
      Property.find().then((results) => {
  
        res.render('admin/properties', {
  
          results: results
  
        });
      })
    } else {
      res.redirect('/login');
    }
    
  } 

}