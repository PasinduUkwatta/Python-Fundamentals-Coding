#compile

my_list =[1,2,3,4,5,6,7,8,9,10]

counter = 0
for number in my_list:
  print(f'number is {number}')
  counter=number+counter;

print(f'total is {counter}')