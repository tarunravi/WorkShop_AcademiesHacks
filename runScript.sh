#!/bin/bash

while true
do

firebase database:get /motorState > messages.txt
location=$(<messages.txt)

if [ "$location" == "\"On\"" ]
then
    #firebase database:update / --data '{"motorState":"Data"}' -y
    sudo python motorScript.py
    echo "motor finished"
fi
sleep 5
done


