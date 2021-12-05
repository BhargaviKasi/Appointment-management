#!/bin/bash
# if [ "$NODE_ENV" = "production" ]
# then
#   pm2-docker start pm2-config/process_prod.json
# else
#   nohup ng build --watch &
#   pm2-docker start pm2-config/process_dev.json
# fi

exec "$@"
