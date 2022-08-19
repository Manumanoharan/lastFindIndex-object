var users = [{'id': 1, 'name': 'Bobby', 'last': 'Stark'},
{'id': 2, 'name': 'Teddy', 'last': 'Lime'},
{'id': 3, 'name': 'Franky', 'last': 'Frail'},
{'id': 4, 'name': 'Teddy', 'last': 'Frail'}];
console.log(users.findLastIndex(users, { name: 'Teddy'}));