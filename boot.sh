# Get HUBOT token
source env.sh

git pull
./bin/hubot --adapter slack &

while true
do
  if [ -z "$(git pull | grep "Already up-to-date")" ];
  then
    sudo systemctl restart hubot
  fi
  sleep 10
done
