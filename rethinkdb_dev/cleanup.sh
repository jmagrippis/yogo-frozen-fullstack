#!/bin/sh

echo 'Stopping rethinkdb...' \
  && docker stop yogo-rethink

docker rm yogo-rethink
