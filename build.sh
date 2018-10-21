#!/bin/bash
docker build -t driverio .
docker tag driverio:latest uzzal2k5/driverio:latest
#docker push uzzal2k5/driverio:latest
docker rm $(docker stop driverio)
docker run -itd --name driverio -v ${PWD}/examples:/app/examples uzzal2k5/driverio:latest
