#!/bin/sh
RUNNING=$(docker inspect --format="{{ .State.Running }}" yogo-rethink 2> /dev/null)

if [ $? -eq 1 ]; then
  echo "Creating container for RethinkDB..."
  docker run --name yogo-rethink -p 8888:8080 -p 28015:28015 -p 29015:29015 \
    -v "$PWD/rethinkdb_dev/data:/data/rethinkdb_data" \
    -d rethinkdb rethinkdb --bind all -n yogofrozen \
    && echo "Createad and started."
  exit 0
fi

if [ "$RUNNING" == "false" ]; then
  echo "Starting RethinkDB."
  docker start yogo-rethink
  exit 0
fi

echo "Dockerized RethinkDB for Yogo Frozen already running!"
