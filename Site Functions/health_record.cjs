// asks the users for their information 


const prompt = require('prompt-sync')();

var health_record = {}

health_record['Name'] = prompt('Enter Name: ')
health_record['Age'] = prompt('Enter Age: ')
health_record['Weight'] = prompt('Enter Weight (in lbs): ')
health_record['Height'] = prompt("Enter Height (in inches): ")
health_record['Phone'] = prompt('Enter Phone Number: ')
health_record['Past Illnesses'] = prompt('Enter Past Illnesses: ')
health_record['Current Illnesses'] = prompt('Enter Current Illnesses: ')
health_record['Current Medications'] = prompt('Enter Medications (Comma Seperated): ')
health_record['Past Medical Conditions'] = prompt('Enter Past Medical Conditions: ')
health_record['Current Medical Conditions'] = prompt('Enter Current Medical Conditions : ')
health_record['Past Procedures'] = prompt('Enter Past Procedures: ')
health_record['Insurance Policy Number'] = prompt('Enter Insurance Policy Number: ')
health_record['Insurance Provider'] = prompt('Enter Insurance Provider: ')


console.log(health_record)
