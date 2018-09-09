# Get HUBOT token
source env.sh

git fetch
git reset --hard origin/master
./bin/hubot --adapter slack &

while true
do
  if [ ! -z "$(git fetch)" ];
  then
    git reset --hard origin/master
    sudo systemctl restart hubot
  fi
  sleep 10
done
