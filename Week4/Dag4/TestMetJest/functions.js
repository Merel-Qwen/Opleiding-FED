const functions = {
  isNull: function() {
    //   return 5
    //   return 'i am null'
    return null;
  },
  checkValue: function(x) {
    return x;
  },
  createUser: function() {
    const user = {
      firstName: "Brad"
      //   firstName: "Pietje"
    };
    user["lastName"] = "Traversy";
    return user;
  }
};

module.exports = functions;
