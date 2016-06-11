#!/bin/sh

echo "looking at $PWD"

echo "Starting rethinkdb..."
docker run --name yogo-rethink -p 8888:8080 -p 28015:28015 -p 29015:29015 \
  -v "$PWD:/rethinkdb_dev/data" \
  -d rethinkdb rethinkdb --bind all -n yogofrozen \
  && echo "Started."
