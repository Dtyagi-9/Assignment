import json
import sqlite3
conn = sqlite3.connect('orgdb.sqlite')
cur = conn.cursor()
cur.execute('DROP TABLE IF EXISTS Weather_report')
cur.execute('''
CREATE TABLE Weather_report (counter INTEGER,air_temp INTEGER, humidity INTEGER,battery INTEGER,wind_speed INTEGER ,time TEXT)''')
input_file = open ('datafile.json')
json_array = json.load(input_file)
cur.execute("SELECT datetime('now');")
current_time = cur.fetchall()
print(current_time)
counter = 0
for item in json_array:
    if item["station_name"] == "Foster Weather Station":
        counter+=1
        air_temp = float(item["air_temperature"])
        humidity = float(item["humidity"])
        battery = float(item["battery_life"])
        wind_speed = float(item["wind_speed"])
        time = item["measurement_timestamp_label"]
        print(air_temp)
        print(wind_speed)
        print(humidity)
        cur.execute('''INSERT INTO Weather_report (counter,air_temp,humidity,battery,wind_speed,time)
        VALUES (?,?,?,?,?,?)''', (counter,air_temp,humidity,battery,wind_speed,time))
#SELECT date('now');

conn.commit()



#process data
cur.close()

#how to parse according to the time interval  
        