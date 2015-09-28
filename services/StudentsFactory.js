signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.students = [
    {name: 'Jose Torres', signedIn: false, signedOut: false},
    {name: 'Eli Gonzalez', signedIn: false, signedOut: false},
    {name: 'Jessica Fix', signedIn: false, signedOut: false},
    {name: 'Sonci Carey', signedIn: false, signedOut: false},
    {name: 'Fred Stooges', signedIn: false, signedOut: false},
    {name: 'Jason Franklin', signedIn: false, signedOut: false},
    {name: 'Hannah Jersey', signedIn: false, signedOut: false},
    {name: 'Big Mary', signedIn: false, signedOut: false}
  ];
  return factory;
});
