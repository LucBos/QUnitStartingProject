var somethingNew = {
	HasBorrowed: function (){
		return true;
	}
};

var somethingBorrowed ={
	HasSomethingBlue: function(){
		return true;
	}
};

module('Something new ');

test('should be accompanied by something blue', function() {
  ok(somethingNew.HasBorrowed, 'has something borrowed');
});
